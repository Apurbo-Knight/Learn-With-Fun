import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "./AuthProvider";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Start Learning", path: "/startLearning" },
    { name: "Tutorials", path: "/tutorials" },
    ...(user?.email ? [{ name: "My Profile", path: "/myprofile" }] : []),
  ];

  return (
    <div className="fixed top-0 z-50 w-full bg-white/50 backdrop-blur-lg shadow-sm">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-3 px-4 relative">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-bold text-2xl text-pink-600 animate__animated animate__bounce flex items-center gap-2"
        >
          <img src={logo} alt="Logo" className="size-10" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 font-semibold">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1 rounded-lg transition-colors ${
                  isActive
                    ? "bg-pink-100 text-pink-600 font-semibold"
                    : "text-gray-800 hover:bg-pink-50 hover:text-pink-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* User / Login */}
        <div className="hidden lg:flex items-center gap-3">
          {user?.email ? (
            <>
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-pink-500"
              />
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-xl transition font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-1 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2 absolute right-4 top-1/2 -translate-y-1/2">
          {/* Show Login/User on mobile */}
          {user?.email ? (
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-pink-500"
            />
          ) : (
            <NavLink
              to="/login"
              className="px-3 py-1 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-sm"
            >
              Login
            </NavLink>
          )}

          {/* Dropdown */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-4 shadow bg-white/80 backdrop-blur-lg rounded-box w-52 space-y-2"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-2 py-1 rounded hover:bg-pink-50 ${
                        isActive ? "bg-pink-100 font-semibold" : ""
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              {user?.email && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-2 py-1 bg-pink-600 hover:bg-pink-700 text-white rounded-md"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
