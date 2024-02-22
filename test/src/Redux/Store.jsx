import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/Features/Counter/CounterSlice";
import logger from "./Middleware/Logger";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
