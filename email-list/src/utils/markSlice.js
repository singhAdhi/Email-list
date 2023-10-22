import { createSlice } from "@reduxjs/toolkit";

const markSlice = createSlice({
  name: "mark",
  initialState: {
    data: [],
  },
  reducers: {
    addMark: (state, action) => {
      state.data.push(action.payload);
    },
  },
});
export const { addMark } = markSlice.actions;
export default markSlice.reducer;
