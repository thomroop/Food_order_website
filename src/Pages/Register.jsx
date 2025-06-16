import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user', // default to user
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const emailExists = users.find((user) => user.email === formData.email);

    if (emailExists) {
      toast.error('Email already registered');
      return;
    }

    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    toast.success('Registration successful!');
    navigate('/login');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-12"
      style={{ backgroundImage: "url('/images/background1.jpg')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-yellow bg-opacity-90 backdrop-blur-md shadow-lg rounded-xl px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mb-3 p-2 border border-yellow-300 w-full rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mb-3 p-2 border border-yellow-300 w-full rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="mb-4 p-2 border border-yellow-300 w-full rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

