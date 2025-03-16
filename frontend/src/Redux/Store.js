import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slice/ContactSlice";
import subscribeUser from "./slice/subscribersSlice";
import bookinghallSlices from "./slice/BookinghallSlice";
export const store = configureStore({
  reducer: {
    contact: contactReducer,
    subscribers: subscribeUser,
    booking: bookinghallSlices,
  },
});
