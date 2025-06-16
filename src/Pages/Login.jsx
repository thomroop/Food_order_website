import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slice/authSlice';
import { useNavigate, NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const password = e.target.password.value;

    // Admin login (hardcoded)
    if (name === 'admin' && password === 'admin123') {
      dispatch(login({ username: 'Admin', role: 'admin' }));
      toast.success('Welcome Admin! 🎉');
      navigate('/admin');
      return;
    }

    // Check localStorage for registered users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(
      (user) => user.name === name && user.password === password
    );

    if (existingUser) {
      dispatch(login({ username: existingUser.name, role: existingUser.role }));
      toast.success(`Welcome ${existingUser.name}! 👋`);

      if (existingUser.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/menu');
      }
    } else {
      toast.error('Invalid credentials ❌');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-12"
      style={{ backgroundImage: "url('/images/background1.jpg')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-xl px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center">
          Don’t have an account?{' '}
          <NavLink to="/register" className="text-yellow-600 hover:underline font-medium">
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;

