/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";
import cartProduct from "./function/AddToCart";
import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import { HiStar } from "react-icons/hi";

const ProductCard = ({ details }) => {
  const { title, image, rating, price, id } = details;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="md:mb-0 mb-3 mx-auto">
      <div className="overflow-hidden rounded-lg bg-white text-slate-500 shadow-md md:h-[430px] md:w-[350px] relative">
        <span className="absolute top-0 right-0 px-5 py-1 text-xs text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-pink-400 text-white">
          New
        </span>
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={image}
            alt="card image"
            className="aspect-video w-full p-2"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="md:mb-4 mb-10">
            <h3 className="text-lg font-medium text-slate-700">{title}</h3>
            <p className=" text-slate-500 font-bold"> ${price} </p>
          </header>
          <p className="flex">
            Rating: {rating.rate}{" "}
            <HiStar className="text-yellow-500 text-xl mt-[-2px]" />{" "}
            <span>({rating.count})</span>
          </p>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-between p-6 pt-0 absolute bottom-0 w-full">
          <button
            onClick={() => (user ? cartProduct(details) : navigate("/login"))}
            className="h-10 w-1/2 rounded bg-emerald-500 px-1 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          >
            <span>ADD TO CART</span>
          </button>
          <Link
            to={`/productDetails/${id}`}
            className="bg-blue-500 rounded-md p-3 text-white hover:bg-blue-400"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
