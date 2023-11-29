import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Myprofile = () => { 
    const {user}= useContext(AuthContext)||{}
    return (
        <div>
         <div className="text-center text-3xl mt-5">
            <h1>Profile</h1>
         </div>
         <div className="grid grid-cols-3 gap-2 mt-5">
            <div className="col-span-1 m-2">
                <img src={user.photoURL} alt="" />
            </div>
            <div className="flex justify-center items-center">
            <div>
            <h1>Name:{user.displayName}</h1>
                <h1>Email:{user.email}</h1>
                <h1>Phone:+0880............</h1>
                <div>
                <textarea placeholder="add story" className="textarea mt-5 textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                </div>
            </div>
            </div>
         </div>
        </div>
    );
};

export default Myprofile;