import im1 from '../Logo/nature/nature1.jpg'
import im2 from '../Logo/nature/nature2.jpg'
import im3 from '../Logo/nature/nature3.jpeg'
import im4 from '../Logo/nature/nature4.jpeg'
import im5 from '../Logo/nature/nature5.jpg'
import im6 from '../Logo/nature/nature6.jpg'

const Gerally = () => {
    return (
        <div className='mt-56'>
            
           

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={im1} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={im2} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={im3} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={im4} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={im5} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={im6} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={im1}alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={im2} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={im3} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={im4} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={im5} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={im6} alt=""/>
        </div>
    </div>
</div>


        </div>
    );
};

export default Gerally;