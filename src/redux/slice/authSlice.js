
import { createSlice } from '@reduxjs/toolkit';


const savedAuth = (() => {
  try {
    return JSON.parse(localStorage.getItem('auth')) || {
      isAuthenticated: false,
      user: null,
    };
  } catch {
    return {
      isAuthenticated: false,
      user: null,
    };
  }
})();

const authSlice = createSlice({
  name: 'auth',
  initialState: savedAuth,
  reducers: {
    login: (state, action) => {
      const { username, role } = action.payload;
      state.isAuthenticated = true;
      state.user = { username, role };
      localStorage.setItem(
        'auth',
        JSON.stringify({ isAuthenticated: true, user: { username, role } })
      );
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
