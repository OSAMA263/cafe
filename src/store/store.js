import { configureStore } from "@reduxjs/toolkit";
import data from "../store/slices/dataSlice";

const store = configureStore({
  reducer: { data },
});

export default store;
