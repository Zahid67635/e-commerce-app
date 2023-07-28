import { useEffect, useState } from "react";
import Spinner from "../../Components/Spinner";
import OrderProductCard from "../../Components/OrderProductCard";

const OrderProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
            .catch(er => console.log(er))
    }, [])
    return (
        <div>
            {
                loading ? <Spinner /> : <>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-base bg-base-200 text-violet-600">
                                    <th>PID</th>
                                    <th>Product Name & Photo</th>
                                    <th>Category</th>
                                    <th>Customer Email</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {
                                products.map(p => <OrderProductCard key={p.id} product={p} />)
                            }
                        </table>
                    </div>
                </>
            }
        </div>
    );
};

export default OrderProducts;