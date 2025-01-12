import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slice/auth'
import userSlice from './slice/userSlice'
export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: userSlice,
  },
});

export default store;
