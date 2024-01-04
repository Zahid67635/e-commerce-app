import Navbar from "../Components/Navbar";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <section>
      <div className="md:w-5/6 md:px-0 px-2 mx-auto pb-4">
        <Navbar />
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-3">
            <Dashboard />
          </div>
          <div className="col-span-4 lg:col-span-9">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
