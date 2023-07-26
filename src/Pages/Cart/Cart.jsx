
import CartItem from "./CartItem";

const Cart = () => {
    const cart = localStorage.getItem('myCart')
    const cartArray = JSON.parse(cart || '[]')
    let total = 0;
    for (const item of cartArray) {
        total = total + item.price;
    }
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <section>
            <div className='container px-6 m-auto'>
                <div className='grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12'>
                    <div className='col-span-4 lg:col-span-8 pt-4'>
                        {
                            cartArray.length > 0
                                ?
                                cartArray.map(c => <CartItem refreshPage={refreshPage} detail={c} key={c.id} />) : <h1 className="text-4xl font-bold my-40 text-end">No items in the cart!!</h1>
                        }
                    </div>
                    <div className='col-span-4 flex justify-end'>
                        {
                            cartArray.length > 0 ?
                                <div className='w-4/5'>
                                    <div className='border-solid border-2 rounded-xl p-4 w-full shadow-lg'>
                                        <h1 className='text-gray-900 text-3xl title-font font-medium mb-2'>
                                            $<span>{total}</span>
                                        </h1>
                                        <p>Date</p>
                                        <div className='flex justify-center items-center p-2 border mt-1 mb-2'>
                                            <div>date</div>

                                        </div>

                                        <div className='flex border-t border-gray-200 py-2'>
                                            <span className='text-gray-500'>Product Cost</span>
                                            <span className='ml-auto text-gray-900'>${total}</span>
                                        </div>

                                        <div className='flex border-t border-gray-200 py-2'>
                                            <span className='text-gray-500'>Shipping Cost</span>
                                            <span className='ml-auto text-gray-900'>$5</span>
                                        </div>
                                        <div className='flex border-t border-b mb-6 border-gray-200 py-2'>
                                            <span className='text-gray-900 font-bold'>Total</span>
                                            <span className='ml-auto text-gray-900'>${total + 5}</span>
                                        </div>
                                        <div className='mt-6 mb-2'>
                                            <button className='p-3 bg-green-500 hover:bg-green-600 w-full text-white font-bold'>Pay</button>
                                        </div>
                                    </div>
                                </div>
                                :
                                ''
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;