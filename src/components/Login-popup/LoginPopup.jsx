import React, { useState } from 'react'
import './loginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {
    const[currState, setCurrState] = useState("Sign up");
  return (
    <div className="loginpopup absolute min-w-full overflow-hidden min-h-full z-10 bg-[#00000090] overflow-y-hidden">
      <form className="loginpopup-container place-self-center mt-[130px] w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 px-6 py-7 rounded-lg text-sm animate-fade-in duration-500 ">
        <div className="loginpopup-title flex items-center justify-between text-black">
          <h1 className="text-2xl font-normal">{currState}</h1>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="w-4 cursor-pointer"
          />
        </div>
        <div className="loginpopup-inputs flex flex-col gap-5 ">
          {currState === "Sign up" ? (
            <input
              type="text"
              placeholder="Your Name"
              required
              className="outline-none p-2 rounded  border-2 border-[#c9c9c9]"
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="Your Email"
            required
            className="outline-none p-2 rounded  border-2 border-[#c9c9c9]"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none p-2 rounded border-2 border-[#c9c9c9] "
          />
        </div>
        <button className="bg-orange-600 rounded p-2 text-white text-base ">
          {currState === "Sign up" ? "Create Account" : "Login"}
        </button>
        <div className="loginpopu-condition flex gap-2 items-start -mt-4">
          <input type="checkbox" name="" id="" required className="mt-1" />
          <p className="text-xs">
            By continuing, I agree to the terms of use & Privacy Policy
          </p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new Account?{" "}
            <span
              onClick={() => setCurrState("Sign up")}
              className="text-orange-500 cursor-pointer font-medium"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an Account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="text-orange-500 cursor-pointer font-medium"
            >
              Login Here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup
