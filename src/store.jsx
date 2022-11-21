import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";
const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
