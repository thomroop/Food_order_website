import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const NavBar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <img src="/images/logo.png" alt="Instant Munch Logo" className="h-10 w-auto" />
          <div className="text-xl font-bold select-none">Instant Munch</div>
        </div>

        {/* Center: Welcome message */}
        <div className="flex-1 text-center">
          {isAuthenticated && user?.username && (
            <span className="text-yellow-300 font-semibold">
              Welcome, {user.username}
            </span>
          )}
        </div>

        {/* Right: Navigation Links */}
        <div className="space-x-6 flex items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'text-red-400 font-semibold' : 'hover:text-yellow-300 transition'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-red-400 font-semibold' : 'hover:text-yellow-300 transition'
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? 'text-red-400 font-semibold' : 'hover:text-yellow-300 transition'
            }
          >
            Cart
          </NavLink>

          {/* Admin Panel link */}
          {isAuthenticated && user?.role === 'admin' && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? 'text-red-400 font-semibold' : 'hover:text-yellow-300 transition'
              }
            >
              Admin
            </NavLink>
          )}

          

          {/* Login/Logout toggle */}
          {!isAuthenticated ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'text-red-400 font-semibold' : 'hover:text-yellow-300 transition'
              }
            >
              Login
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              className="hover:text-yellow-300 transition font-semibold"
            >
              Logout
            </button>
          )}

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-red-400 font-semibold' : 'hover:text-yellow-300 transition'
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


