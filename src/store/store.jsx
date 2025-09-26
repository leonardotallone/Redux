import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './ExampleSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export default store;