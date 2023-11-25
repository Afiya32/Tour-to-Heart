import { Link } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import Logo from "../Logotheme/Logo";
import Lottie from "lottie-react";
import animation from '../animation/login.json'
import Marquee from "react-fast-marquee";

const LogIn = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content  flex-col gap-16 lg:flex-row-reverse">
  <div className=" flex-col justify-center items-center text-center w-2/5">
       <Logo/>
       <Marquee> 
        <p className="py-6">A journey to explore the world</p>
       </Marquee>
        
        <div className="h-[100vh]">
            <Lottie animationData={animation}/>
        </div>
      </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        
    
<div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
<div className="relative  grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border shadow-pink-500/40">
  <h3 className="block  font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
   Log In
  </h3>
</div>
<form >
<div className="flex flex-col gap-4 p-6">
  <div className="relative h-11 w-full min-w-[200px]">
    <input
      className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    />
    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Email
    </label>
  </div>
  <div className="relative h-11 w-full min-w-[200px]">
    <input
      className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    />
    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Password
    </label>
  </div>
  
</div>
<div className="p-6 pt-0">
  <button
    className="block w-full flex justify-center items-center select-none rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
  >
   <LuLogIn className='text-2xl' />Log In
  </button>

</div>
</form>
<div>
    <button className="btn btn-outline btn-block btn-info">
   LOG IN WITH <FcGoogle className="text-2xl" /> 
    </button>
</div>
<p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
    Dont have an account?    
    <Link className=" font-semibold text-green-400" to='/signup'>    Sign Up</Link>
  </p>
</div>


    </div>
  </div>
</div>
     
    );
};

export default LogIn;













