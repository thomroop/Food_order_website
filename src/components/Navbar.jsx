import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
         <div className="flex items-center space-x-3">
         <img src="/images/logo.png" alt="Instant Munch Logo" className="h-10 w-auto" />
          <div className="text-xl font-bold select-none">Instant Munch</div>
        </div>

        
        <div className="space-x-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'text-red-400 font-semibold'
                : 'hover:text-yellow-300 transition'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-red-400 font-semibold'
                : 'hover:text-yellow-300 transition'
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? 'text-red-400 font-semibold'
                : 'hover:text-yellow-300 transition'
            }
          >
            Cart
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? 'text-red-400 font-semibold'
                : 'hover:text-yellow-300 transition'
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-red-400 font-semibold'
                : 'hover:text-yellow-300 transition'
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
