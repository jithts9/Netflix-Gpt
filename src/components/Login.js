import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSinginForm, setIsSigninForm] = useState(true);

  const signUpClick = () => {
    setIsSigninForm((prevState) => !prevState);
  };

  return (
    <div>
      <Header />

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_medium.jpg"
        alt="logo"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <form className="bg-black p-8 text-white flex flex-col space-y-4 w-full max-w-md opacity-80">
          <h1 className="text-3xl font-bold">
            {isSinginForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSinginForm && (
            <input
              type="text"
              className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
              placeholder="Full Name"
            />
          )}
          <input
            type="text"
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
            placeholder="Email or mobile number"
          />
          <input
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
            type="password"
            placeholder="Password"
          />
          <button className="bg-red-600 p-3 rounded text-white font-bold hover:bg-red-700">
            {isSinginForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">OR</span>
          </div>
          <button
            onClick={signUpClick}
            className="bg-gray-600 p-3 rounded text-white font-bold hover:bg-gray-700"
          >
            {isSinginForm ? "Use a sign-in code" : "already signed in"}
          </button>
          <a href="#" className="text-sm text-gray-400 hover:underline">
            Forgot password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
