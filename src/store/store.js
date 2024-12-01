import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../Slice/CartSlice';

export const store = configureStore({
  reducer: { cartDetails: CartReducer},
});