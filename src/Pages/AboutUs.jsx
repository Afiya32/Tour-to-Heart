import { Helmet } from "react-helmet-async";
import pic from "../Logo/page/about.jpg"

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>
                    TH || About Us
                </title>
            </Helmet>
       <div className="flex justify-center items-center p-5">
      <img src={pic} alt="" />
       </div>
        </div>
    );
};

export default AboutUs;