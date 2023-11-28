
import { Link } from "react-router-dom";
import useDataLoad from "../hook/useDataLoad";
import PackageCard from "./packagecard";
// import PackageCard from "./packagecard";


const Packages = () => {
  const {data } = useDataLoad() || {};
  console.log(data);
    return (
      <div className="grid grid-flow-row justify-center items-center">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
           {
            data?.slice(0,3).map(item=><PackageCard key={item._id} item={item}
            ></PackageCard>)
           }
        </div>
        <div className="mt-5 btn btn-outline mx-auto">
          <Link to='/allpack'>See All Packages</Link>
        </div>
        </div>
    );
};

export default Packages;