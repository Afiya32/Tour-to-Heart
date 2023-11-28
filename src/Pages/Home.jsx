import { Helmet } from "react-helmet-async";
import Banner from "../Component/Banner";
import Heading from "../Component/Heading";
import Tablist from "../Component/Tablist";
import ToueTypes from "../Component/ToueTypes";
import Histroy from "../Component/Histroy";


// isLoading ,isFetching, refetch
const Home = () => {
 
    return (
        <div className="min-w-min max-w-7xl mx-auto">
            <Helmet>
                <title>
                    TH || Home
                </title>
            </Helmet>
       <Banner/>
       <Heading tittle='Tourism and Travel Guide' subtittle='Our services for'/>
        <div className="grid my-5 justify-center items-center mx-auto ">
        <Tablist/>
        </div>
        <div>
            <Heading tittle='tour types' subtittle='find a tour by'/>
           <div className="w-5/6 mx-auto">
           <ToueTypes/>
            </div>
        </div>
        <div>
            <Heading tittle='tourist histroy' subtittle=' our best moments'/>
            <Histroy/>
        </div>
        </div>
    );
};

export default Home;