import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../pages/StudentPage/slice";

const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

export default store;
