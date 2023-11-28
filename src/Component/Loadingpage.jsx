import Lottie from "lottie-react";
import animation from "../animation/loading-1.json"

const Loadingpage = () => {
    return (
        <div className="max-w-[1200px] mx-auto flex justify-center items-center">
          <Lottie animationData={animation}></Lottie>
        </div>
    );
};

export default Loadingpage;