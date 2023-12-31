// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { AuthContext } from "../Context/UserContext";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <header className="p-4 text-gray-800">
        <div className="flex md:justify-around justify-between h-16 items-center">
          <Link to={`/`} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-8 h-8 text-sky-600"
            >
              <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
              <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
            </svg>
          </Link>
          <ul className="items-stretch hidden space-x-1 lg:flex md:ml-28">
            <li className="flex">
              <Link to="/" className="flex items-center px-4 -mb-1">
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/products"
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Products
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/dashboard"
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Dashboard
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/cart"
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Cart{" "}
                <span className="text-2xl">
                  <HiShoppingCart className="text-orange-300" />
                </span>
              </Link>
            </li>
          </ul>
          <div className="md:pl-16 flex-shrink-0 hidden lg:flex gap-2">
            {user ? (
              <div className="flex items-center gap-2">
                <p className="font-semibold flex items-center p-1 text-base">
                  Welcome, {user?.displayName}
                </p>
                <button
                  onClick={logout}
                  className="self-center px-8 py-3 font-semibold rounded hover:bg-sky-600 bg-sky-500 text-gray-50 "
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="self-center px-8 py-3 rounded hover:bg-slate-200"
                >
                  Sign In
                </Link>
                <Link
                  to="signUp"
                  className="self-center px-8 py-3 font-semibold rounded hover:bg-sky-600 bg-sky-500 text-gray-50 "
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <div className="dropdown flex dropdown-end">
            {user && (
              <p className="font-semibold flex items-center p-1 text-sm md:hidden">
                Welcome, {user?.displayName}
              </p>
            )}
            <label tabIndex={0} className="btn flex items-center lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-3"
            >
              <li className="flex">
                <Link
                  to="/"
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent border-sky-600"
                >
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link
                  to="/products"
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  Products
                </Link>
              </li>
              <li className="flex">
                <Link
                  to="/dashboard"
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  Dashboard
                </Link>
              </li>
              <li className="flex">
                <Link
                  to="/cart"
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  Cart{" "}
                  <span className="text-2xl">
                    <HiShoppingCart className="text-orange-300" />
                  </span>
                </Link>
              </li>
              {user ? (
                <div className="items-center gap-2">
                  <button
                    onClick={logout}
                    className="flex items-center ml-4 md:px-8 px-4 md:py-3 py-2 font-semibold rounded hover:bg-sky-600 bg-sky-500 text-gray-50 "
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="flex items-center px-4 mb-2 py-2 rounded hover:bg-slate-200"
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="signUp"
                      className="flex items-center px-4 ml-4 py-2 font-semibold rounded hover:bg-sky-600 bg-sky-500 text-gray-50 w-1/2"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
