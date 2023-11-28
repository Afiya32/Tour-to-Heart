import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { FaHeart } from "react-icons/fa";


const Mybooking = () => {
    const data =useLoaderData();
    console.log(data);
    // const {guide,tourType,title,price,image}=data||{};
    return (
        <div>
            <Helmet>
                <title>DashBoard || Profile</title>
            </Helmet>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        Tour-type
        </th>
        <th>Guide name</th>
        <th>price</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        data?.map(item=> <tr key={item._id}>
           
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
            <td>
             {item.guide}
            </td>
            <td>{item.price}</td>
            <th>
              <button className="btn btn-ghost "><FaHeart/></button>
            </th>
            <th>
                <Link to="http://localhost:5173/tour-details/6563653a5f86a60ed7a73fa3">
              <button className="btn btn-ghost btn-xs">details</button></Link>
            </th>
          </tr>)
    }
     
 
     
    </tbody>
   
 
    
  </table>
</div>
            </div>
          
        </div>
    );
};

export default Mybooking;