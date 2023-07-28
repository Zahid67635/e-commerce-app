/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { HiStar } from "react-icons/hi";
import cartProduct from '../../Components/function/AddToCart';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../Context/UserContext';

const ProductDetails = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { id, image, title, price, description, category, rating } = useLoaderData()
    useTitle(`Details - ${id}`)
    const item = { image, title, price, description, category, rating }
    return (
        <div className='md:flex gap-x-10 md:gap-y-0 gap-y-4 items-center py-10'>
            <div className='flex justify-center items-center md:w-1/2'>
                <img src={image} className='w-1/2' alt="" />
            </div>
            <div className='items-center md:w-1/2 md:px-0 px-2'>
                <h1 className='text-4xl font-bold pb-2'>{title}</h1>
                <h2 className='text-2xl font-semibold pb-4'>Category- <span className='text-blue-600'>{category.toUpperCase()}</span></h2>
                <p className='font-semibold py-2 flex'>Rating - {rating.rate} <span className='mt-[-5px]'><HiStar className='text-yellow-500 text-2xl' /></span> </p>
                <span className='font-semibold'>Reviews - {rating.count}</span><br />
                <h2 className='text-2xl font-semibold pt-5'>Description: </h2>
                <p className='text-base'>{description}</p>
                <h1 className='font-semibold text-xl pt-5'>Price - ${price}</h1>
                <button onClick={() => user ? cartProduct(item) : navigate('/login')} className="h-10 mt-4 w-1/2 rounded bg-emerald-500 px-1 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                    <span>ADD TO CART</span>
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;