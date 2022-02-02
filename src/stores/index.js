import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./lineProfile";

export const store = configureStore({
  reducer: {
    user: userReducer
  },
});
