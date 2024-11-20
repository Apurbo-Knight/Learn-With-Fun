import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "./AuthProvider";


const Navbar = () => {
  const {user,handleLogout}=useContext(authContext)
  // console.log(user?.photoURL);
  return (
    <div className="navbar  w-10/12 mx-auto bg-blue-400 rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/startLearning">Start-Learning</NavLink>
            <NavLink to="/tutorials">Tutorials</NavLink>
            {
              (user?.email && <NavLink to="/myprofile">My Profile</NavLink>)
            }
            
          </ul>
        </div>
        <h2 className="font-semibold text-2xl animate__animated animate__bounce">Lingo Bingo</h2>
      </div>
      <div className="navbar-center gap-5 font-semibold hidden lg:flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/startLearning">Start-Learning</NavLink>
        <NavLink to="/tutorials">Tutorials</NavLink>
        
        {
              (user?.email && <NavLink to="/myprofile">My Profile</NavLink>)
            }
      </div>
      <div className="navbar-end">
        <div className="login flex items-center gap-2">
          {
            user?.email ? (
              <div className="flex items-center gap-4">
                <img className="rounded-full size-12" src={user?.photoURL} alt="" />
                <button className="btn  bg-blue-300 rounded-md" onClick={handleLogout}>Logout</button>
              </div>
            ):(
              <NavLink to="/login" className="btn bg-blue-300 rounded-md">
            Login
          </NavLink>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
       