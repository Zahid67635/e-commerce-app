/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductTable = ({ product }) => {
    const { id, title, image, price, category } = product
    return (


        <tbody>
            {/* row 1 */}
            <tr>
                <td>{id}</td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-sm">{title}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span>${price}</span>
                </td>
                <td>{category}</td>
                <th className="flex gap-1">
                    <Link to={`/productDetails/${id}`}><button className="btn btn-info hover:bg-blue-400 text-white btn-xs">Details</button></Link>
                    <button className="btn btn-error hover:bg-red-500 text-white btn-xs">Delete</button>
                </th>
            </tr>

        </tbody>
    );
};

export default ProductTable;