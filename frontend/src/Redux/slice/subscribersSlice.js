import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ API_URL now properly handles development vs production
const API_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL
    : "/api/auth";

const WEB3FORMS_API_URL = import.meta.env.VITE_API_URLWEB;
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_API_WEB3FORM;
// ✅ Async action to subscribe a user (expects an object parameter)
export const subscribeUser = createAsyncThunk(
  "subscribers/subscribe",
  async ({ email }, { rejectWithValue }) => {
    try {
      // 1️⃣ Send booking to your backend

      const backendResponse = await axios.post(`${API_URL}/subscribe`, {
        email,
      });
      // 2️⃣ Send booking to Web3Forms
      const web3Response = await axios.post(WEB3FORMS_API_URL, {
        access_key: WEB3FORMS_ACCESS_KEY, // Required API key
        ...email, // Include all form fields
      });

      return {
        backend: backendResponse.data,
        web3forms: web3Response.data,
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Subscription failed"
      );
    }
  }
);
const subscribersSlice = createSlice({
  name: "subscribers",
  initialState: {
    loading: false,
    success: false,
    error: null,
    subscribers: [],
  },
  reducers: {
    resetStatus: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribeUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(subscribeUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.subscribers.push(action.payload);
      })
      .addCase(subscribeUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetStatus } = subscribersSlice.actions;
export default subscribersSlice.reducer;
