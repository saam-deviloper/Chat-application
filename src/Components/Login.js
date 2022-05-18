import React, { useContext, useRef } from "react";
import logo from "../logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/AppContext";

export default function Login() {
  
  //context
  const {currentUser,signInUser,signInGoogleUser} = useContext(UserContext);

  //input values
  const userInput = useRef();
  const userPassInput = useRef();
  let navigate = useNavigate();

  //login handler
  const loginHandler = async (e)=>{
    e.preventDefault();
    const result = await signInUser(userInput.current.value,userPassInput.current.value);
    console.log(result)
    navigate('/chats');
  }
  const loginGoogleHandler = async (e)=>{
    e.preventDefault();
    const result = await signInGoogleUser();
    console.log(result)
    navigate('/chats');
  }

  return (
    <>
      <div
        class="p-5 text-sm text-gray-700 bg-gray-100 rounded-lg text-center dark:bg-gray-700 dark:text-gray-300"
        role="alert"
      >
        <span class="font-medium">signup help!</span> Use Google for creating
        account.
      </div>
      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img class="mx-auto h-16 w-auto" src={logo} alt="logo" />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              <a
                href="/"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {currentUser != null ? currentUser.email : 'hello guest'}
              </a>
            </p>
          </div>
          <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  ref={userInput}
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label for="password" class="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={userPassInput}
                />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  for="remember-me"
                  class="ml-2 block text-sm text-gray-900"
                >
                  {" "}
                  Remember me{" "}
                </label>
              </div>

              <div class="text-sm">
                <a
                  href="/"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {" "}
                  Forgot your password?{" "}
                </a>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={loginHandler}
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
              
              {/* sign in google */}
              <button
                type="button"
                onClick={loginGoogleHandler}
                class="mt-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      // clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Sign in Google
              </button>

              <Link to={'/signup'}>
              <button 
                type="button"
                class=" mt-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md align-center text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Sign up with Google(available!)
                <img
                  src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                  className="h5- w-5 mx-2"
                  alt="gglicon"
                />
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
