import React, { useContext, useRef, useState } from "react";
import logo from "../logo.svg";
import { Link,useNavigate } from "react-router-dom";
import { UserContext } from "../context/AppContext";
import Alert from "./Alert";

export default function SignUp() {
  //get context data
  const { signUpUser, setAlert } = useContext(UserContext);
  //error side of app
  const [err, setErr] = useState("");
  // const [loading, setLoading] = useState(false);
  //input refs
  const userInput = useRef();
  const userPassInput = useRef();
  const userConfirmPassInput = useRef();
 //navigate to another page
 let navigate = useNavigate();
  //if signup was successfull navigate to login page
  const loginHandler =()=>{
    setTimeout(()=>{
      navigate('/login')
    },3000)

  }

  const onSignUpHandler = async (e) => {
    e.preventDefault();
    // setLoading(true);

    if (userConfirmPassInput.current.value !== userPassInput.current.value) {
      return setErr("inputs are not valid,try again");
    }
    try {
      setErr("");
      let result = await signUpUser(
        userInput.current.value,
        userPassInput.current.value
      );
      setAlert({ type: "success", message: `${result.user.email} signup successfully` });
      // setLoading(false);
      console.log(result.user);
      loginHandler();
    } catch (error) {
      setErr("Failed to create an account");
      setAlert({
        type: "danger",
        message: `signup failed! try agian, ${error}`,
      });
      console.log(error);
    }
  };
  return (
    <>
      {err === "" ? (
        ""
      ) : (
        <div
          className="p-5 text-sm text-gray-700 bg-gray-100 rounded-lg text-center dark:bg-gray-700 dark:text-gray-300"
          role="alert"
        >
          <span className="font-medium text-red-900">{err}</span>
        </div>
      )}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-16 w-auto" src={logo} alt="logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Signup with your email address or Google Account
            </h2>
            
            <p className="mt-2 text-center text-sm text-gray-600">
              <a
                href="/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {" "}
                start your 14-day free trial{" "}
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  // autocomplete="email"
                  ref={userInput}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  // autocomplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={userPassInput}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm-Password
                </label>
                <input
                  id="password"
                  name="confirmPassword"
                  type="password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                  ref={userConfirmPassInput}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  {" "}
                  Remember me{" "}
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {" "}
                  Forgot your password?{" "}
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={onSignUpHandler}
                // disabled={loading}
                type="submit"
                className="  group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md align-center text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      // fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      // clip-rule="evenodd"
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
              <Link to={"/login"}>
                <button
                  type="button"
                  className=" mt-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        // fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        // clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  Sign in
                </button>
              </Link>
            </div>
          </form>
          <Alert />
        </div>
      </div>
    </>
  );
}
