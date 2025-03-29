import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ API_URL properly switches between development and production
const API_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL
    : "/api/auth";

const WEB3FORMS_API_URL = import.meta.env.VITE_API_URLWEB;
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_API_WEB3FORM;
// ✅ Async action for creating a booking
export const createBooking = createAsyncThunk(
  "booking/create",
  async (bookingData, { rejectWithValue }) => {
    try {
      console.log("Booking Data:", bookingData); // Debugging

      // 1️⃣ Send booking to your backend
      const backendResponse = await axios.post(
        `${API_URL}/bookings`,
        bookingData
      );

      // If the backend detects a duplicate date, it should return an error
      if (!backendResponse.data.success) {
        throw new Error(backendResponse.data.message);
      }

      // 2️⃣ Send booking to Web3Forms
      const web3Response = await axios.post(WEB3FORMS_API_URL, {
        access_key: WEB3FORMS_ACCESS_KEY, // Required API key
        ...bookingData, // Include all form fields
      });

      return {
        backend: backendResponse.data,
        web3forms: web3Response.data,
      };
    } catch (error) {
      console.error("Booking Error:", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
const BookinghallSlice = createSlice({
  name: "booking",
  initialState: {
    loading: false,
    success: false,
    error: null,
    booking: null,
    selectedDate: null,
  },

  reducers: {
    resetStatus: (state) => {
      state.success = false;
      state.error = null;
    },
    setSelectedDate: (state, action) => {
      if (action.payload) {
        const parsedDate = new Date(action.payload);
        state.selectedDate = parsedDate.toISOString().split("T")[0]; // ✅ Store "YYYY-MM-DD"
      } else {
        state.selectedDate = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.booking = action.payload;

        // ✅ Only update `selectedDate` if the booking was successful
        if (action.payload.backend && action.payload.backend.bookingDetails) {
          const parsedDate = new Date(
            action.payload.backend.bookingDetails.eventDate
          );
          state.selectedDate = parsedDate.toISOString().split("T")[0]; // Store in "YYYY-MM-DD"
        }
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // ✅ Now this stores the backend error
      });
  },
});

export const { resetStatus, setSelectedDate } = BookinghallSlice.actions;
export default BookinghallSlice.reducer;
