import { createSlice } from "@reduxjs/toolkit";

export const getAlluserslice = createSlice({
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

export const { toggleState } = getAlluserslice.actions;

export default getAlluserslice.reducer;