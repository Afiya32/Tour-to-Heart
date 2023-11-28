import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Myprofile = () => {
    const{user}=useContext(AuthContext);
    const {displayName,photoURL}=user ||{}
    return (
        <div>
            <Helmet>
                <title>DashBoard || Profile</title>
            </Helmet>
        <div className=" -mb-56 grid justify-center items-center">
            <h1 className="text-5xl text-center mt-16 font-bold"> profile</h1>
        <div className="w-3/4 mt-48 mx-auto text-center">
        
        <div className="hero -mt-24 bg-base-200">
      
<div className="hero-content flex-col lg:flex-row">
<img src={photoURL} className="max-w-sm rounded-lg shadow-2xl" />
<div>
<h1 className="text-3xl  p-5 font-bold">name : {displayName}</h1>
<textarea placeholder="Add Story" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
  <Link to='/'>
  <button className="btn btn-primary">Go Back</button>
  </Link>
</div>
</div>
</div>
        </div>
        </div>
        </div>
    );
};

export default Myprofile;