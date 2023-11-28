import { Helmet } from "react-helmet-async";
import PackageCard from "../Component/packagecard";
import useDataLoad from "../hook/useDataLoad";


const AllPackages = () => {
    const {data } = useDataLoad() || {};
    return (
   <div>
    <Helmet>
        <title>
            TH || All-tour-packages
        </title>
    </Helmet>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
           {
            data.map(item=><PackageCard key={item._id} item={item}
            ></PackageCard>)
           }
        </div>
   </div>
    );
};

export default AllPackages;