import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaHeart, FaTrashAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../hook/useAxiosSecure";
import useGuides from "../hook/useGuides";


const MywishList = () => {
  const { user } =useContext(AuthContext)
    const data = useLoaderData()
    const axiosSecure = useAxiosSecure()
    const {refetch}=useGuides()
  const mydata = data.filter(item=>item.name===user.displayName)
  const handledelet =id=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
      
        axiosSecure.delete(`/wishlist/${id}`)
        .then(res=>{
          if(res.data.deletedCount>0){
            refetch()
               Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
       
          }
        })
      }
    });

  }
    return (
        <div>
            <Helmet>
                <title>DashBoard || My wishList</title>
            </Helmet>
            {
              mydata.length>0?(
                <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        Tour-type
        </th>
        <th>price</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
      mydata?.map(item=><tr key={item._id}>
           
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.tourType}</div>
              <div className="text-sm opacity-50">{item.title}</div>
            </div>
          </div>
        </td>
        
        <td>{item.price}</td>
        <th>
          <button className="btn btn-ghost "><FaHeart/></button>
        </th>
        <th>
          <button onClick={()=>handledelet(item._id)}
           className="btn btn-ghost "><FaTrashAlt/>deleted</button>
        </th>
        <th>
            <Link to="/tour-details/6563653a5f86a60ed7a73fa3">
          <button className="btn btn-ghost btn-xs">details</button></Link>
        </th>
      </tr>) 
    }
     
 
     
    </tbody>
   
 
    
  </table>
</div>
            </div>
              ):(
                <div className="flex justify-center mt-24 items-center">
                  <p className="text-5xl text-red-800">you are not wish anything</p>
                </div>
              )
            }
          
        </div>
    );
};

export default MywishList;