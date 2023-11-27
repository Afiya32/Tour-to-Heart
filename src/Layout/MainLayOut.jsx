import { NavLink, Outlet } from 'react-router-dom';
import logo from  '../Logo/logo/logo2-removebg-preview.png'
import person from '../Logo/logo/person-removebg-preview.png'
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import Footer from '../Component/Footer';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const MainLayOut = () => {
  const { user, logout } = useContext(AuthContext) ||{};
    return (
        <div className='min-w-min max-w-7xl mx-auto'>
            <div>
                <div className="drawer  ">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full fixed z-10  bg-opacity-20 max-w-7xl text-white mx-auto navbar bg-black">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">
       <div className='flex justify-center items-center w-16 h-16 ml-16'>
        <img src={logo} alt="" />
        <h1 className='text-4xl font-bold'><span className='text-red-500'>T</span>our<span className='text-green-500'>H</span>eart </h1>
            
       </div>
      </div>
      <div className="flex-none hidden justify-center items-center lg:block">
        <ul className="menu text-xl menu-horizontal p-4">
          {/* Navbar menu content here */}
          <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/'>Home</NavLink>
          <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/community'>Community</NavLink>
          <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/blog'>Blogs</NavLink>
          <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/about'>About Us</NavLink>
          <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/contact'>Contact Us</NavLink>
         <details className="dropdown p-2">
  <summary className="m-1 btn ">
  <div className="avatar">
  <div className="w-12 rounded-full">
    { user?.email? <img src={user.photoURL}/>:<img src={person} />}
  </div>
</div>
  </summary>
  <ul className="p-4 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    {user?.email?<>
      <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 flex justify-center items-center btn btn-outline btn-success text-red-800 underline  font-bold" : "font-bold flex justify-center items-center btn btn-outline btn-success p-2"
  } to='/dashboard' > <MdOutlineSpaceDashboard className='text-2xl'/>Dash Board</NavLink>
    <li>
      <button onClick={logout} 
    className='btn btn-outline btn-success p-2'> <RiLogoutCircleRLine className='text-2xl' />Log Out</button> </li>
    </>:  <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 flex justify-center items-center btn btn-outline btn-success text-red-800 underline  font-bold" : "font-bold flex justify-center items-center btn btn-outline btn-success p-2"
  } to='/signup'> <LuLogIn className='text-2xl' />Sign Up</NavLink>
    }
    
  </ul>
</details>
        
        </ul>
      </div>
    </div>
    {/* Page content here */}
   <div className='min-w-min max-w-7xl mx-auto flex justify-center items-center'>
   <Outlet/>
   </div>
  </div> 
  <div className="drawer-side fixed z-10 text-white bg-opacity-20 max-w-7xl mx-auto bg-black ">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu justify-evenly items-center p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/'>Home</NavLink>
          <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/community'>Community</NavLink>
          <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/blog'>Blogs</NavLink>
          <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/about'>About Us</NavLink>
          <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/contact'>Contact Us</NavLink>
     <details className="dropdown p-2">
  <summary className="m-1 btn ">
  <div className="avatar">
  <div className="w-12 rounded-full">
  { user?.email? <img src={user.photoURL}/>:<img src={person} />}
  </div>
</div>
  </summary>
  <ul className="p-4 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
  {user?.email?<>
      <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 flex justify-center items-center btn btn-outline btn-success text-red-800 underline  font-bold" : "font-bold flex justify-center items-center btn btn-outline btn-success p-2"
  } to='/dashboard' > <MdOutlineSpaceDashboard className='text-2xl'/>Dash Board</NavLink>
    <li>
      <button onClick={logout} 
    className='btn btn-outline btn-success p-2'> <RiLogoutCircleRLine className='text-2xl' />Log Out</button> </li>
    </>:  <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 flex justify-center items-center btn btn-outline btn-success text-red-800 underline  font-bold" : "font-bold flex justify-center items-center btn btn-outline btn-success p-2"
  } to='/signup'> <LuLogIn className='text-2xl' />Sign Up</NavLink>
    }
  </ul>
</details>
    </ul>
  </div>
</div>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayOut;