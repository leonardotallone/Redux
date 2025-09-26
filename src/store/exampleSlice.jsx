import { createSlice } from "@reduxjs/toolkit";

export const exampleSlice = createSlice({
  name: "example",
  initialState: {
    value: "OFF",
  },
  reducers: {
    toggleState: (state) => {
      state.value = state.value === "ON" ? "OFF" : "ON";
    },
  },
});

export const { toggleState } = exampleSlice.actions;

export default exampleSlice.reducer;
