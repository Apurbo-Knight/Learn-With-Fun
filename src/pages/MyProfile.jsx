import React, { useContext } from "react";
import { authContext } from "../components/AuthProvider";
import { NavLink } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(authContext);
  // console.log(user.photoURL);
  return (
    <div className="h-screen w-10/12 mx-auto  flex flex-col items-center bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/flat-lay-usa-stars-firecrackers_23-2148135052.jpg?t=st=1732012457~exp=1732016057~hmac=987af06ab8928dd7f953d7c0cd55d4c7cee311f3a66ecc415e4469d7ae4b032e&w=1380')]">
        <h2 className="font-bold text-5xl my-20  text-blue-500">WELCOME TO OUR WEBSITE {user?.displayName}</h2>
      <div className="card   shadow-xl">
        <div className="card-body">
          <div>
            <p className="font-bold text-3xl mb-5 text-blue-500">Name: {user?.displayName}</p>
            <p className="font-bold text-3xl mb-5 text-blue-500">Email: {user?.email}</p>
            <div className="flex  gap-10">
              <span className="font-bold text-3xl text-blue-500">Photo:</span>
              <img className="size-40" src={user?.photoURL} alt="" />
            </div>
          </div>
        </div>
        <button className='btn bg-blue-500 mx-auto block mb-4'><NavLink to="/updateProfile">Update</NavLink></button>
      </div>
    </div>
  );
};

export default MyProfile;
