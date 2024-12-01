import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    product: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action);
      const existingProduct = state.product.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct; 
      } else {
        state.product.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.product = state.product.filter(item => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const product = state.product.find(item => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.product.find(item => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.product = state.product.filter(item => item.id !== action.payload);
      }
    }
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = CartSlice.actions;

export default CartSlice.reducer;
