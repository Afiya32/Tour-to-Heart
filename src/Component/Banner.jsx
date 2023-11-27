import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../Logo/BannerImage/img1.jpg'
import img3 from '../Logo/BannerImage/img3.jpg'
import img2 from '../Logo/BannerImage/img2.jpg'
import img4 from '../Logo/BannerImage/img5.jpg'
import img5 from '../Logo/BannerImage/img4.jpeg'
import img6 from '../Logo/BannerImage/img6.jpg'
import img7 from '../Logo/BannerImage/img7.jpg'
const Banner = () => {
    return (
       <div className="min-w-min max-w-7xl mx-auto">
         <Carousel autoPlay='true' className="text-center  overflow-hidden grid justify-center items-center">
        <div>
            <img src={img1} />
          
        </div>
        <div>
            <img src={img2} />
          
        </div>
        <div>
            <img src={img3} />
           
        </div>
        <div>
            <img src={img4} />
           
        </div>
        <div>
            <img src={img5} />
           
        </div>
        <div>
            <img src={img6} />
           
        </div>
        <div>
            <img src={img7} />
           
        </div>
    </Carousel>
       </div>
    );
};

export default Banner;