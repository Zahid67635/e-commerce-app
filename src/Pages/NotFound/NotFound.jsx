import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="relative">
            <div className="flex justify-center items-center pt-10">
                <img src="404.png" alt="" />
            </div>
            <div className="absolute top-3/4 left-1/2">
                <Link to='/' className="p-2 bg-sky-400 text-white rounded">Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;