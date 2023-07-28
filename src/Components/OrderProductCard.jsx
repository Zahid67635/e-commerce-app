/* eslint-disable react/prop-types */


const OrderProductCard = ({ product }) => {
    const { id, title, image, category } = product
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
                <td>{category}</td>
                <td>abc@gmail.com</td>
                <th>
                    <button className="btn btn-info btn-xs hover:bg-blue-400 text-white ">Order Info</button>
                </th>
            </tr>

        </tbody>
    );
};

export default OrderProductCard;