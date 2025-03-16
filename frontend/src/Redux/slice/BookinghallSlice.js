import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action for creating a booking
export const createBooking = createAsyncThunk(
  "booking/create",
  async (bookingData, { rejectWithValue }) => {
    try {
      console.log("Booking Data:", bookingData); // Log bookingData for debugging
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/bookings`, // ✅ Uses Vite's environment variable syntax
        bookingData
      );
      return response.data;
    } catch (error) {
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
        if (action.payload.eventDate) {
          const parsedDate = new Date(action.payload.eventDate);
          state.selectedDate = parsedDate.toISOString().split("T")[0]; // ✅ Store "YYYY-MM-DD"
        } else {
          state.selectedDate = null;
        }
        state.booking = action.payload;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetStatus, setSelectedDate } = BookinghallSlice.actions;
export default BookinghallSlice.reducer;
