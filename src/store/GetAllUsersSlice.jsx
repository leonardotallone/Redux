import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch users
export const fetchAllUsers = createAsyncThunk(
  "appUsers/fetchAllUsers",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data; // this will be the action.payload
  }
);

const getAllUsersSlice = createSlice({
  name: "appUsers",
  initialState: {
    allUsers: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allUsers = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default getAllUsersSlice.reducer;
