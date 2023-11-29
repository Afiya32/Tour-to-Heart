import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUpload } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hook/useAxiosSecure";
import useGuides from "../hook/useGuides";



const UserList = () => {
    const data = useLoaderData()||{};
    const axiosSecure = useAxiosSecure()
    const {refetch}=useGuides()
    const handleAdmin= user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `${user.name} is admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }  
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
                <title>DashBoard || Userlist</title>
            </Helmet>
            <div className="m-5">
                <div className="flex justify-around p-5 items-center">
                    <h1>All User</h1>
                    <h1>Total User:{data.length}</h1>
                </div>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className="text-2xl ">
        Users
        </th>
        <th className="text-2xl ">Email</th>
        <th className="text-2xl ">Role</th>
        <th className="text-2xl ">action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
      data?.map(item=><tr key={item._id}>
           
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.name}</div>
              <div className="text-sm opacity-50"></div>
            </div>
          </div>
        </td>
        
        <td>{item.email}</td>       
        <td>
           {
            item.role=='admin'?'Admin': <button onClick={()=>handleAdmin(item)}
            className="btn btn-ghost btn-outline">
            {item.role}<FaUpload/>
                </button>
           }
           </td> 
        <th>
          <button onClick={()=>handledelet(item._id)}
           className="btn btn-ghost "><FaTrashAlt/>deleted</button>
        </th>      
      </tr>) 
    }
     
 
     
    </tbody>
   
 
    
  </table>
</div>
            </div>
            </div>
        </div>
    );
};

export default UserList;