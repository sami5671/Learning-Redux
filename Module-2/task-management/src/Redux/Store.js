import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./Features/Tasks/tasksSlice";
import userSlice from "./Features/User/UserSlice";

const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
    userSlice: userSlice,
  },
});

export default store;
