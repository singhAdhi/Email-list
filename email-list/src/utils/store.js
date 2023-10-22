import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import markSlice from "./markSlice";

const store = configureStore({
  reducer: {
    data: dataSlice,
    mark: markSlice,
  },
});

export default store;
