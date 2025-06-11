import { createSlice } from '@reduxjs/toolkit';

const savedProducts = JSON.parse(localStorage.getItem('products')) || [];

const initialState = {
  products: savedProducts, // Initialize from localStorage if available
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Set all products (used for initial loading)
    setProducts: (state, action) => {
      state.products = action.payload;
      localStorage.setItem('products', JSON.stringify(state.products));
    },

    // Add a new product
    addProduct: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem('products', JSON.stringify(state.products));
    },

    // Edit a product by ID
    editProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const index = state.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...updatedProduct };
        localStorage.setItem('products', JSON.stringify(state.products));
      }
    },

    // Delete a product by ID
    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
      localStorage.setItem('products', JSON.stringify(state.products));
    },
  },
});

export const { setProducts, addProduct, editProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
