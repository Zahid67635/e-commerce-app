
const AllCustomers = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                ali@gmail.com
                            </td>
                            <td>01232131333</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Delete Customer</button>
                            </th>
                        </tr>
                        {/* row 2 */}

                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default AllCustomers;