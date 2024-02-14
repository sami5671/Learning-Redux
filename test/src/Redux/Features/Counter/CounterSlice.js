import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count = state.count - 1;
      } else {
        alert("Cannot decrement value is under 0");
      }
    },
    incrementByValue: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrementByValue: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue, decrementByValue } =
  counterSlice.actions;

export default counterSlice.reducer;
