import { Helmet } from "react-helmet-async";
import Gerally from "../Component/Gerally";
import Heading from "../Component/Heading";
import Plan from "../Component/Plan";
import Guides from "../Component/Guides";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useGuides from "../hook/useGuides";


const PackagesDetails = () => {
    const { user }=useContext(AuthContext)||{};
    const {data}=useGuides()||{};

    return (
        <div>
            <Helmet>
                <title>
                    TH || tour-Details
                </title>
            </Helmet>
            <div>
                <Gerally/>
                <div className="grid p-5 justify-center items-center text-center">
                    <p>Earlier our ancestors used to travel by sea routes as it was a convenient and most affordable medium but it was time taking. Due to, technological advancement we can now easily travel to any place without wasting time we can travel thousands of miles within a few hours. Technological advancement has shrunk the earth into a global village. Besides, the modern modes are much safer than the modes that our predecessors used.

Effect of Tourism on a Country
For any country, tourism generates a lot of money especially a country like India. Due to the Taj Mahal (one of the seven wonders of the world) every year the government raise a huge sum of revenue. Also, because of tourism other industries also bloom. Such industries include transportation, wildlife, arts and entertainment, accommodation, etc.

Moreover, this ultimately leads to the creation of job and other opportunities in the area. But there are some drawbacks too which can affect the lifestyle and cultural value of the country.

Importance of Tourism
Traveling is a tiring and difficult thing and not everyone is able to travel. But at the same time, it’s a fun activity that takes your tiredness away. Travelling adds flavor to life as you travel to different places that have a different culture and lifestyle. Also, it’s an easy way to learn about the culture and tradition of a place. Besides, for many areas, tourism is their main source of income.

Get the huge list of more than 500 Essay Topics and Ideas

India- A Tourist Attraction
The Taj Mahal is not the only destination in India that attract tourist. Likewise, there are hundreds of tourist destination that is spread over the Indian plateau. India has a large variety of Flora and Fauna. Besides, the equator divides the geographical land of India into almost two equal halves that make India a country where six seasons occurs.

Moreover, in almost every city of India, there is a historical monument made by the rulers in their time period.

Benefits of Tourism
Tourism not only benefits the government but also the people that live in the local area. It also creates a business as well as employment opportunities for the local people which ultimately help the government to earn income.

Benefits Due to Tourism
As we know that tourism contributes a lot to the revenue of the country. Also, the government uses this income for the growth and development of the country.
Likewise, they construct dams, wildlife sanctuaries, national parks, Dharamshala and many more.</p>
                </div>
                <Heading tittle="tour-plan" subtittle="....."/>
          <div className="grid justify-center items-center mx-auto m-5">
            <Plan/>
          </div>
          <Heading tittle="our-guides" subtittle="....."/>
          <div className="grid justify-center items-center mx-auto m-5">
              <Guides/>
          </div>
          <Heading tittle="Booking-form"/>
          <div className="grid justify-center items-center mt-5">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border shadow-pink-500/40">
  <div className="avatar">
  <div className="w-12 rounded-full">
   <img src={user.photoURL}/> 
  </div>
</div>
    
    
    <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
    {user.displayName}
    </h3>
  </div>
  <form action="">
  <div className="flex flex-col gap-4 p-6">
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder="you can change your email address"
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
       {user.email}
      </label>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
     
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
       price
      </label>
    </div>
    <div className="-ml-2.5">
      <div className="inline-flex items-center">
      <label>
  Select a guide:
  <select>
    <option value="">Select...</option>
    {data?.map(item => (
      <option className="btn btn-outline btn-primary" key={item._id} value={item.name}>
        {item.name}
      </option>
    ))}
  </select>
</label>
       
      </div>
    </div>
  </div>
  <div className="p-6 pt-0">
    <button
      className="block w-full select-none rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Book Now
    </button>
    
  </div>
  </form>
</div>
          </div>
            </div>
        </div>
    );
};

export default PackagesDetails;