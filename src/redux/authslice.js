
import { createSlice } from '@reduxjs/toolkit';

const savedAuth = JSON.parse(localStorage.getItem('auth'));

const initialState = savedAuth || {
  isAuthenticated: false,
  user: null, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, role } = action.payload;
      state.isAuthenticated = true;
      state.user = { username, role };
      localStorage.setItem('auth', JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('auth');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
