import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slice/authSlice';

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
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
        
      
        <div className="flex items-center space-x-3">
          <img src="/images/logo.png" alt="Instant Munch Logo" className="h-10 w-auto" />
          <div className="text-xl font-bold select-none">Instant Munch</div>
        </div>

        {isAuthenticated && user?.username && (
          <div className="text-yellow-300 font-semibold text-center sm:flex-1">
            Welcome, {user.username}
          </div>
        )}

       
        <div className="flex flex-wrap justify-center sm:justify-end gap-4">
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
