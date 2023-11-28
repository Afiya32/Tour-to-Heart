import useGuides from "../hook/useGuides";


const Guides = () => {
    const {data}=useGuides()||{};
    console.log(data);
    return (
       
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>phone-number</th>
       
        <th></th>
      </tr>
    </thead>
   
  {
    data?.map(item=> <tbody key={item._id}>
        {/* row 1 */}
        <tr>
         
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={item.image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{item.name}</div>
               
              </div>
            </div>
          </td>
          <td>
           {item.phone_number}
          </td>
       
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
       
      
       
      </tbody>)
  }
  
    
  </table>
</div>
    );
};

export default Guides;