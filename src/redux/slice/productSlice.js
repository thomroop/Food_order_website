import { createSlice } from '@reduxjs/toolkit';


const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('products');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error parsing products from localStorage:', error);
    return [];
  }
};

const initialState = {
  products: loadFromLocalStorage(),
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   
    setProducts: (state, action) => {
      state.products = action.payload;
      localStorage.setItem('products', JSON.stringify(state.products));
    },

    
    addProduct: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem('products', JSON.stringify(state.products));
    },

    
    editProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const index = state.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...updatedProduct };
        localStorage.setItem('products', JSON.stringify(state.products));
      }
    },

    
    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
      localStorage.setItem('products', JSON.stringify(state.products));
    },
  },
});

export const { setProducts, addProduct, editProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;

