import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import userReducer from "./lineProfile";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
});
