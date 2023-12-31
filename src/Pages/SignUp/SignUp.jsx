/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const from = "/";
  const { createUser, updateUser } = useContext(AuthContext);
  useTitle("Login");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Password are not same!!");
      return;
    }
    if (password.length < 8) {
      setError("Password have to be 8 characters!!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          displayName: userName,
        };

        updateUser(userInfo)
          .then(() => {
            console.log(userInfo);
          })
          .catch((err) => console.log(err));
        toast.success("Account Created Successfully!!");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };
  return (
    <div className="md:w-full px-1 md:px-0 mx-auto my-10">
      <form
        onSubmit={handleSubmit}
        className="overflow-hidden rounded bg-white text-slate-500 shadow-lg shadow-sky-300 max-w-sm mx-auto"
      >
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4 text-center">
            <h3 className="text-2xl font-medium text-slate-700">Sign Up</h3>
          </header>
          <div className="flex flex-col space-y-8">
            {/*      <!-- Input field --> */}
            <div className="relative mt-6 mb-1">
              <input
                id="id-b03"
                type="email"
                name="email"
                placeholder="your name"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all bg-white focus:border-pink-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 "
                required
              />
              <label
                htmlFor="id-b03"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:content-['\00a0*'] peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-300 peer-disabled:cursor-not-allowed peer-disabled:before:bg-transparent"
              >
                Your email
              </label>
            </div>
            <div className="relative mt-6 mb-1">
              <input
                id="id-b03"
                type="text"
                name="userName"
                placeholder="your name"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all bg-white focus:border-sky-300 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50"
                required
              />
              <label
                htmlFor="id-b03"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:content-['\00a0*'] peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-300 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your Name
              </label>
            </div>
            <div className="relative mb-1">
              <input
                id="id-b05"
                type="number"
                name="number"
                placeholder="your number"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all bg-white focus:border-sky-300 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50"
                required
              />
              <label
                htmlFor="id-b05"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:content-['\00a0*'] peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-300 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your Phone Number
              </label>
            </div>
            {/*      <!-- Input field --> */}
            <div className="relative my-6">
              <input
                id="id-b13"
                type="password"
                name="password"
                placeholder="your password"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all bg-white focus:border-sky-300 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 "
                required
              />
              <label
                htmlFor="id-b13"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:content-['\00a0*'] peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-300 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your password
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            </div>
            <div className="relative my-6">
              <input
                id="id-b14"
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all bg-white focus:border-sky-300 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 "
                required
              />
              <label
                htmlFor="id-b14"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:content-['\00a0*'] peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-300 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Confirm Password
              </label>
            </div>
          </div>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="p-6">
          {error && (
            <p className="text-red-500 py-1 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-400 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-sky-500 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          >
            <span>Sign Up</span>
          </button>

          <p className="py-1 text-sm font-semibold text-center">
            Already have an account?
            <span>
              <Link to="/login" className="text-blue-500">
                {" "}
                Login
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
