import { Helmet } from "react-helmet-async";
import pic from "../Logo/page/contact.png"

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>
                    TH || ContactUs 
                </title>
            </Helmet>
            <div className="flex justify-center items-center p-5">
      <img src={pic} alt="" />
       </div>
        </div>
    );
};

export default ContactUs;