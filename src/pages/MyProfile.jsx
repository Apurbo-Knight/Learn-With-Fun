import React, { useContext } from "react";
import { authContext } from "../components/AuthProvider";
import { NavLink } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(authContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
      {/* Welcome Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate__animated animate__fadeIn">
        Welcome to Our Website, {user?.displayName}
      </h2>

      {/* Profile Card */}
      <div className="w-full max-w-md bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6 transition hover:shadow-pink-200/50">
        {/* Profile Image */}
        <img
          className="w-32 h-32 rounded-full border-4 border-pink-300 shadow-md"
          src={user?.photoURL}
          alt="Profile"
        />

        {/* User Info */}
        <div className="text-center space-y-2">
          <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            {user?.displayName}
          </p>
          <p className="text-lg font-semibold text-gray-700">{user?.email}</p>
        </div>

        {/* Update Button */}
        <NavLink to="/updateProfile">
          <button className="w-60 py-2 mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl shadow-lg hover:shadow-purple-300/50 transition">
            Update Profile
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default MyProfile;
