/* eslint-disable react/prop-types */
import Logo from "../Logotheme/Logo";


const Heading = ({tittle,subtittle}) => {
    return (
        <div className="grid justify-center w-4/12 mx-auto items-center">
         <div className="flex justify-center items-center mx-auto">
         <Logo/>
         </div>
           <div>
            <p className="text-red-500 p-2 italic text-center">   -----{subtittle}------</p>
            <h3 className="text-2xl lg:text-3xl uppercase border-y-2 border-yellow-400 py-4 font-semibold">{tittle}</h3>
           </div>

        </div>
    );
};

export default Heading;