import { createSlice } from "@reduxjs/toolkit";

export const exampleSlice = createSlice({
  name: "example",
  initialState: {
    flip: "OFF",
    numericValue: 0,
  },
  reducers: {
    toggleSwitch: (state) => {
      state.flip = state.flip === "ON" ? "OFF" : "ON";
    },
    modifyValue: (state, action) => {
      if (action.payload === 1) {
        state.numericValue += 1;
      } else if (action.payload === -1) {
        state.numericValue -= 1;
      }
    },
  },
});

export const { toggleSwitch, modifyValue } = exampleSlice.actions;

export default exampleSlice.reducer;
