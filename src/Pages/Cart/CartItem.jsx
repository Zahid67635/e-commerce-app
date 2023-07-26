/* eslint-disable react/prop-types */
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { HiTrash } from 'react-icons/hi';

const CartItem = ({ detail, refreshPage }) => {
    const [quantity, setQuantity] = useState(1)
    const addQuantity = () => {
        setQuantity(quantity + 1)
    }
    const removeQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
        else {
            setQuantity(1)
        }
    }
    const deleteItem = (listId) => {
        const cart = localStorage.getItem('myCart')
        const cartArray = JSON.parse(cart || '[]')
        const filterList = cartArray.filter(c => c.id !== listId)
        localStorage.setItem('myCart', JSON.stringify(filterList));
        toast.success('Removed a item!!')
        refreshPage()

    }
    return (
        <div className="shadow-lg shadow-slate-300 h-28 flex mb-5">
            <div className="w-3/5 flex">
                <div className="rounded">
                    <img src={detail.image} className="w-20 h-28 p-2" alt="" />
                </div>
                <div className="pl-3 pt-1">
                    <h2 className="text-lg font-bold">{detail.title}</h2>
                    <h3 className="text-base">{detail.category.toUpperCase()}</h3>
                    <h3 className="text-md font-semibold">{detail.price}$</h3>
                </div>
            </div>
            <div className="flex justify-between gap-5">
                <div className="flex items-center bg-slate-200 rounded-lg my-8 px-2"><button onClick={removeQuantity} className="p-3 rounded-md bg-slate-100">-</button ><span className="px-4">{quantity} </span><button onClick={addQuantity} className="p-3 rounded-md bg-slate-100">+</button></div>
                <button onClick={() => deleteItem(detail.id)} className="flex items-center bg-slate-100 my-8 px-2 rounded font-semibold">Remove<HiTrash className="text-red-600 text-4xl" /></button>
            </div>
        </div>
    );
};

export default CartItem;