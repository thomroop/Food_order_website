import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const UserPanel = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // ✅ Protect route: allow only 'user' role
  if (!isAuthenticated || user?.role !== 'user') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-6 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-green-600">Welcome to the User Panel</h1>
        <p className="text-gray-700">You’re logged in as: <strong>{user?.username}</strong></p>
        <p className="text-gray-500 mt-2">Role: {user?.role}</p>
      </div>
    </div>
  );
};

export default UserPanel;

