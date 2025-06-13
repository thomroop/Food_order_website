import { createSlice } from '@reduxjs/toolkit';

const initial = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initial,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const newState = state.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find(item => item.id === id);
      if (item) item.quantity = quantity;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCart: () => {
      localStorage.removeItem('cart');
      return [];
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
