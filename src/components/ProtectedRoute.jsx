// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRole }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const role = localStorage.getItem('role');

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (role !== allowedRole) {
    // redirect to home if role doesn't match
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
