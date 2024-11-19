import React, { useContext, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { authContext } from "../components/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Login = () => {
  const {handleGoogleLogin,handleLogin,handleLogout} = useContext(authContext)
  const [error,setError]=useState("")
  const emailRef = useRef();
  const location =useLocation()
  const navigate = useNavigate()
  // console.log(location)
  const handleSubmit =(e)=>{
    e.preventDefault()
    setError('')
    const email = e.target.email.value
    const password = e.target.password.value

    handleLogin(email,password)
    .then(res=>{
      navigate(location?.state?.from)
    })
    .catch(err=>{
          setError(err)
    })
  };
  const googleLoginHandler=()=>{
    handleGoogleLogin()
    .then(res=>{
      navigate(location?.state?.from)
    })
  }

  const handleForgetPassword=()=>{
    // console.log("give me a email",emailRef.current.value);
    const email = emailRef.current.value;
    if(!email){
      alert("Please Provide a valid email address")
    }
    else{
      sendPasswordResetEmail(auth,email)
      .then(()=>{
        alert("Password Reset email sent, please check your email")
      })
    }
  }

  return (
    <div className="bg-gray-200">
      <div>
        <Navbar></Navbar>
      </div>
      <div className=" min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none p-10">
          <h2 className="text-2xl font-semibold text-center">
            Login Your Account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                ref={emailRef}
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label onClick={handleForgetPassword} className="label">
                <a href="#" className="label-text-alt link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-neutral rounded">Login</button>
            </div>
            
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded  " onClick={googleLoginHandler}>Login With Google</button>
            </div>

          </form>
          {error && <p className="text-red-500 font-bold text-center">Invalid Credential</p>}
          <p className="text-center font-semibold">
            Don't Have An account?
            <NavLink className="text-red-500" to="/register">
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
