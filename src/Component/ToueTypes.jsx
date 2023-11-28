import { FaHiking } from "react-icons/fa";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { FaPersonWalking } from "react-icons/fa6";
import { GiWildfires } from "react-icons/gi";

const ToueTypes = () => {
    return (
        <div className="flex justify-center items-center gap-5 p-5">
          <div className="avatar p-2">
  <div className="w-24 rounded-full btn btn-outline text-center flex flex-row justify-center items-center gap-1" >
  <FaHiking className="text-center" />
  <p>Hiking</p>
  </div>
</div>
          <div className="avatar p-2">
  <div className="w-24 rounded-full btn btn-outline text-center flex flex-row justify-center items-center gap-1" >
  <MdOutlineSportsSoccer className="text-center" />
  <p>Sport</p>
  </div>
</div>
          <div className="avatar p-2">
  <div className="w-24 rounded-full btn btn-outline text-center flex flex-row justify-center items-center gap-1" >
  <FaPersonWalking className="text-center" />
  <p>Walking</p>
  </div>
</div>
          <div className="avatar p-2">
  <div className="w-24 rounded-full btn btn-outline text-center flex flex-row justify-center items-center gap-1" >
  <GiWildfires className="text-center" />
  <p>Wildlife</p>
  </div>
</div>
         
        </div>
    );
};

export default ToueTypes;