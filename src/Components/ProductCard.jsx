/* eslint-disable react/prop-types */

const ProductCard = ({ details }) => {
    const { title, image, rating, price } = details
    return (
        <div>
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-lg shadow-slate-300 md:h-[470px]">
                {/*  <!-- Image --> */}
                <figure>
                    <img
                        src={image}
                        alt="card image"
                        className="aspect-video w-full"
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                    <header className="mb-4">
                        <h3 className="text-lg font-medium text-slate-700">
                            {title}
                        </h3>
                        <p className=" text-slate-400"> ${price} </p>
                    </header>
                    <p>
                        Rating: {rating.rate} <span>({rating.count})</span>
                    </p>
                </div>
                {/*  <!-- Action base sized basic button --> */}
                <div className="flex justify-between p-6 pt-0">
                    <button className="h-10 w-1/2 rounded bg-emerald-500 px-1 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <span>ADD TO CART</span>
                    </button>
                    <button className="bg-blue-500 rounded-md p-3 text-white hover:bg-blue-400">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;