import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./ExampleSlice";
import getAllUsersReducer from "./GetAllUsersSlice";

const store = configureStore({
  reducer: {
    example: exampleReducer,
    appUsers: getAllUsersReducer,
  },
});

export default store;
