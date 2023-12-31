/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const PackageCard = ({item}) => {
  const {user}=useContext(AuthContext);
    const { _id,image,tourType,title,price} = item ||{}
    const handle= ()=>{
       const newWish={image ,price,name:user.displayName,tourType};
       
       fetch('https://tour-to-heart-server.vercel.app/wishlist',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newWish)
    })
    .then(res=>res.json())
    .then(data => {
        console.log(data);
        if (data.insertedId) {
            Swal.fire(
                'Congrats!',
                'You uploaded a new wishlist successfully',
                'success'
            )
        }
    });
    }
    console.log(item)
    return (
        <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img className="w-full"
            src={image}
            alt="ui/ux review check"
          />
        
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              {tourType}
            </h5>
            <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            
              ${price}
            </p>
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            {title}
          </p>
          <div className="inline-flex flex-wrap items-center gap-3 mt-8 group">
          
            
        
        
           
            <button onClick={handle}
              data-tooltip="more"
              className="btn btn-outline absolute z-50 whitespace-normal break-words rounded-lg bg-pink-500 py-1 px-5 font-sans text-sm font-normal text-white focus:outline-none"
            >
           <FaRegHeart/>
            </button>
            <Marquee><h1>Please click the heart to add in wishlist</h1></Marquee>
          </div>
        </div>
        <div className="p-6 pt-3">
        <Link to={`/tour-details/${_id}`}>
        <button
            className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Details
          </button>
        </Link>
        </div>
      </div>
 
    );
};

export default PackageCard;