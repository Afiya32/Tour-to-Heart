import useDataLoad from "../hook/useDataLoad";
import Loadingpage from "./Loadingpage";
import { FacebookShareButton,  FacebookIcon } from "react-share";

const Histroy = () => {
    const { data ,isLoading} = useDataLoad()|| {}
    console.log(data)
    if(isLoading){
        return (<>
            <Loadingpage></Loadingpage>
            </>);
    }
    return (
        <div className="flex justify-center items-center gap-5 m-5">
         {
            data?.slice(0,2).map(item=> <div key={item._id}
             className="card  image-full">
            <figure><img src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{item.tourType}</h2>
              <p>{item.title}</p>
              <div className="card-actions justify-end">
              <FacebookShareButton
               url={`https://www.facebook.com/${item._Id}`} // Use the actual property from your 'item' object
               quote={item.tourType} // Use the actual property from your 'item' object
             
              >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
              </div>
            </div>
          </div>)
         }
        </div>
    );
};

export default Histroy;










