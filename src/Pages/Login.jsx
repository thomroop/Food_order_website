import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slice/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === 'admin' && password === 'admin123') {
      dispatch(login({ username, role: 'admin' }));
      navigate('/admin');
    } else {
      dispatch(login({ username, role: 'user' }));
      navigate('/menu');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-12"
      style={{ backgroundImage: "url('/images/background1.jpg')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-brown-dark -100 bg-opacity-90 backdrop-blur-md shadow-lg rounded-xl px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            required
            placeholder="Enter username"
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
      </form>
    </div>
  );
};

export default Login;
