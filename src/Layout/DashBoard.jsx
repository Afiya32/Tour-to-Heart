import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Marquee from "react-fast-marquee";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../Logo/logo/logo2-removebg-preview.png"


const DashBoard = () => {
  const { user } = useContext(AuthContext);
    return (
      <div className="max-w-[1200x] mt-2 mx-auto">
      <div className="mx-auto h-24 max-w-[1200px] bg-slate-300 flex justify-center items-center">
        <div className=" flex justify-center items-center">
         <div className="w-12 h-12">
         <img src={logo} alt="" />
         </div>
         <h1>welcome {user.displayName} to DashBoard</h1>
        </div>
      </div>
      <div className="max-w-[1220px] mx-auto">
        <Marquee>
          <h1>Congrats! <span className="text-red-400">{user.displayName}</span> for log in .welcome to DashBoard </h1>
        </Marquee>
      </div>
      <div className="max-w-[1200px] gap-2 mx-auto mt-2 flex h-screen">
        <div className="flex-[1] bg-slate-500">
        <ul className=" text-center mt-5 grid grid-cols-1 justify-center items-center gap-12 menu-horizontal">
          {/* Navbar menu content here */}
          <NavLink to='/'  className={({ isActive }) =>
                  isActive
                    ? "btn btn-outline btn-success":"text-black"
                }>Home</NavLink>
          <NavLink to='/dashboard'  className={({ isActive }) =>
                  isActive
                    ? "btn btn-outline btn-success":"text-black"
                }>DashBoard</NavLink>
          <NavLink to='/dashboard/wish'  className={({ isActive}) =>
                  isActive
                    ? "btn btn-outline btn-success":"text-black"
                }>My Wish-List</NavLink>
          <NavLink to='/dashboard/booked'  className={({ isActive}) =>
                  isActive
                    ? "btn btn-outline btn-success":"text-black"
                }>My Booked-package</NavLink>
         
        </ul>
        </div>
        <div className="flex-[3] bg-slate-400 ">
            <Outlet/>
        </div>
      </div>
      <div className="mt-2">
        <Footer/>
      </div>
    </div>
    );
};

export default DashBoard;