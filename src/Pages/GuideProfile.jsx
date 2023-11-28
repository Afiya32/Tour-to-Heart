import { Link, useLoaderData } from "react-router-dom";


const GuideProfile = () => {
    const data = useLoaderData()
    const {image,name,details,phone_number} = data || {};
    return (
        <div className="w-3-4 grid justify-center items-center">
            <div className="w-3/4 mt-52 mx-auto text-center">
            <h1 className="text-5xl font-bold">{name} profile</h1>
            <div className="hero -mt-24 min-h-screen bg-base-200">
          
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <h1 className="text-5xl font-bold">name : {name}</h1>
      <h1 className="text-3xl font-bold">phone: {phone_number}</h1>
      <p className="py-6"> {details}</p>
      <Link to='/'>
      <button className="btn btn-primary">Go Back</button>
      </Link>
    </div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default GuideProfile;