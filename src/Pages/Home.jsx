import { Helmet } from "react-helmet-async";
import Banner from "../Component/Banner";
import Heading from "../Component/Heading";
import Tablist from "../Component/Tablist";


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
        <div className="grid my-5 justify-center items-center mx-auto w-2/12">
        <Tablist/>
        </div>
        <div>
            <Heading tittle='tour types' subtittle='find a tour by'/>
            <p>tour types parts</p>
        </div>
        <div>
            <Heading tittle='tourist histroy' subtittle=' our best moments'/>
            <p> tours histroy parts</p>
        </div>
        </div>
    );
};

export default Home;