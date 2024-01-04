import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="md:px-0 px-4 mx-auto pb-10 pt- min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
