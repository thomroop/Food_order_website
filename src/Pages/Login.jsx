import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
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
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/images/background1.jpg')" }} 
    >
      <form
        onSubmit={handleSubmit}
        className="bg-yellow bg-opacity-90 backdrop-blur-md shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Login</h2>

        <input
          id="username"
          name="username"
          type="text"
          required
          placeholder="Username"
          className="w-full mb-4 p-2 border rounded placeholder-yellow-500"
        />

        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded placeholder-yellow-500"
        />

        <button
          type="submit"
          className="bg-red-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
