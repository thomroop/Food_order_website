import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initial = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initial,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.find(item => item.id === product.id);

      if (existing) {
        if (existing.quantity < product.stock) {
          existing.quantity += 1;
          toast.success('Item quantity increased');
        } else {
          toast.error(`Only ${product.stock} items in stock`);
        }
      } else {
        if (product.stock > 0) {
          state.push({ ...product, quantity: 1 });
          toast.success('Item added to cart');
        } else {
          toast.error('Out of stock');
        }
      }

      localStorage.setItem('cart', JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      const newState = state.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(newState));
      toast.success('Item removed from cart');
      return newState;
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find(item => item.id === id);
      if (item) {
        if (quantity <= item.stock) {
          item.quantity = quantity;
          toast.success('Quantity updated');
        } else {
          toast.error(`Only ${item.stock} items in stock`);
        }
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },

    clearCart: () => {
      localStorage.removeItem('cart');
      toast.success('Cart cleared');
      return [];
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
