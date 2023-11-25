import logo from  '../Logo/logo/logo2-removebg-preview.png'

const Logo = () => {
    return (
        <div className='flex w-12 h-12 justify-center ml-5 items-center'>
            <img src={logo} alt="" />
            <h1 className='text-4xl font-bold'><span className='text-red-500'>T</span>our<span className='text-green-500'>H</span>eart </h1>
            
        </div>
    );
};

export default Logo;