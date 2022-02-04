import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./lineProfile";

export const store = configureStore({
  reducer: {
    user: userSlice
  },
});
