import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Mir Hossain",
  email: "mir@hossain.com",
  userTasks: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
