import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='w-5/6 mx-auto pb-4'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;