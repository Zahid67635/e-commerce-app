import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='md:w-5/6 md:px-0 px-2 mx-auto pb-4'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;