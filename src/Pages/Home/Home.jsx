// eslint-disable-next-line no-unused-vars
import React from 'react';
import Lottie from 'lottie-react';
import anim from '../../assets/anim.json'
const Home = () => {
    return (
        <div>
            <section className="text-gray-800">
                <div className="container flex flex-col-reverse justify-center md:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl font-bold sm:text-5xl">

                            Find Your Product with <span className='text-sky-400'>E-Commerce</span> Now!!
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 font-semibold">
                            <span className='text-sky-500'>E-Commerce</span>, Your one-stop destination for seamless online shopping and unbeatable deals
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-sky-600 hover:bg-sky-700 text-gray-50">SHOP</a>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800 hover:text-sky-600">Categories</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center md:p-6 md:mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <Lottie animationData={anim} loop={true}></Lottie>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;