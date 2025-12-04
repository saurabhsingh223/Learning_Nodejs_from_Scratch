import React, { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true); // true = login, false = signup

  const toggleMode = () => setIsLogin((prev) => !prev);

  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* LEFT SIDE INFO */}
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                {isLogin ? "Welcome Back 👋" : "Create an Account 🚀"}
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                {isLogin
                  ? "Login to your account to continue."
                  : "Sign up to get started with us."}
              </p>

              <div className="mt-8 text-gray-600">
                <p className="text-md tracking-wide font-semibold w-64">
                  Manage your profile, access exclusive features, and stay updated.
                </p>
              </div>

              <div className="mt-6">
                {isLogin ? (
                  <>
                    <p className="text-gray-700 font-medium">Not an account?</p>
                    <button
                      onClick={toggleMode}
                      className="mt-2 bg-orange-700 px-4 py-2 rounded-lg text-white hover:bg-orange-600 transition"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-gray-700 font-medium">Already have an account?</p>
                    <button
                      onClick={toggleMode}
                      className="mt-2 bg-orange-700 px-4 py-2 rounded-lg text-white hover:bg-orange-600 transition"
                    >
                      Log in
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <form className="p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {isLogin ? "Login" : "Sign Up"}
              </h2>

              {/* Name field only for Signup */}
              {!isLogin && (
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  />
                </div>
              )}

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="password" className="hidden">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              {/* Extra confirm password for signup */}
              {!isLogin && (
                <div className="flex flex-col mt-2">
                  <label htmlFor="confirmPassword" className="hidden">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  />
                </div>
              )}

              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-4 transition ease-in-out duration-300"
              >
                {isLogin ? "Log in" : "Sign up"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
