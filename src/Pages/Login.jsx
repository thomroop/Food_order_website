import React from 'react';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    let role = 'user';
    if (username === 'admin' && password === 'admin123') {
      role = 'admin';
    }

    // Save role & login status
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('role', role);

    // Redirect
    if (role === 'admin') {
      window.location.href = '/admin';
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/images/background1.jpg')" }} // 👈 Background image path
    >
      <div className="bg-yellow bg-opacity-90 backdrop-blur-md shadow-lg rounded-lg overflow-hidden w-full max-w-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login to Instant Munch</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-md transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
