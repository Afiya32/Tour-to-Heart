import { Helmet } from "react-helmet-async";
import pic from "../Logo/page/community.png"

const Community = () => {
    return (
        <div>
            <Helmet>
                <title>
                    TH || Community
                </title>
            </Helmet>
            <div className="flex justify-center items-center p-5">
      <img src={pic} alt="" />
       </div>
        </div>
    );
};

export default Community;