import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slice/authSlice';

import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiOutlineInfoCircle,
  AiOutlineLogin,
  AiOutlineLogout,
} from 'react-icons/ai';
import {
  MdRestaurantMenu,
  MdAdminPanelSettings,
  MdContactMail,
} from 'react-icons/md';

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
        {/* Logo + App Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo.png"
            alt="Instant Munch Logo"
            className="h-10 w-auto"
          />
          <div className="text-xl font-bold select-none">Instant Munch</div>
        </div>

        {/* Welcome user */}
        {isAuthenticated && user?.username && (
          <div className="text-yellow-300 font-semibold text-center sm:flex-1">
            Welcome, {user.username}
          </div>
        )}

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'text-red-400 font-semibold flex items-center gap-1'
                : 'hover:text-yellow-300 transition flex items-center gap-1'
            }
          >
            <AiFillHome className="text-2xl" /> 
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive
                ? 'text-red-400 font-semibold flex items-center gap-1'
                : 'hover:text-yellow-300 transition flex items-center gap-1'
            }
          >
            <MdRestaurantMenu  className="text-2xl"/> 
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-red-400 font-semibold flex items-center gap-1'
                : 'hover:text-yellow-300 transition flex items-center gap-1'
            }
          >
            <MdContactMail className="text-2xl"/> 
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? 'text-red-400 font-semibold flex items-center gap-1'
                : 'hover:text-yellow-300 transition flex items-center gap-1'
            }
          >
            <AiOutlineShoppingCart className="text-2xl"/> 
          </NavLink>

          {isAuthenticated && user?.role === 'admin' && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive
                  ? 'text-red-400 font-semibold flex items-center gap-1'
                  : 'hover:text-yellow-300 transition flex items-center gap-1'
              }
            >
              <MdAdminPanelSettings  className="text-2xl"/> 
            </NavLink>
          )}

          {!isAuthenticated ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'text-red-400 font-semibold flex items-center gap-1'
                  : 'hover:text-yellow-300 transition flex items-center gap-1'
              }
            >
              <AiOutlineLogin className="text-2xl"/> 
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              className="hover:text-yellow-300 transition font-semibold flex items-center gap-1"
            >
              <AiOutlineLogout className="text-2xl" /> 
            </button>
          )}

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-red-400 font-semibold flex items-center gap-1'
                : 'hover:text-yellow-300 transition flex items-center gap-1'
            }
          >
            <AiOutlineInfoCircle className="text-2xl" /> 
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
