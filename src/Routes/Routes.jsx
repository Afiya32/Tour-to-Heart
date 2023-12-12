import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Blog from "../Pages/Blog";
import ContactUs from "../Pages/ContactUs";
import Community from "../Pages/Community";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import DashBoard from "../Layout/DashBoard";
import AllPackages from "../Pages/AllPackages";
import PackagesDetails from "../Pages/PackagesDetails";
import GuideProfile from "../Pages/GuideProfile";
import Mybooking from "../Pages/Mybooking";
import MywishList from "../Pages/MywishList";
import Myprofile from "../Pages/Myprofile";
import AddTour from "../Pages/AddTour";
import UserList from "../Pages/UserList";
import PrivateRoute from "../Pages/PrivateRoute";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },{
                path:'about',
                element:<AboutUs/>
            },{
                path:'blog',
                element:<Blog/>
            },{
                path:'contact',
                element:<ContactUs/>
            },{
                path:'community',
                element:<Community/>
            },{
                path:'allpack',
                element:<PrivateRoute><AllPackages/></PrivateRoute>
              
            },{
                path:'tour-details/:id',
                element:<PrivateRoute><PackagesDetails/></PrivateRoute>,
                loader:({params})=> fetch(`https://tour-to-heart-server.vercel.app/tour/${params._id}`)
                 },{
                    path:'guideprofile/:id',
                    element:<PrivateRoute><GuideProfile/></PrivateRoute>,
                    loader:({params})=> fetch(`https://tour-to-heart-server.vercel.app/guides/${params.id}`)
                 }

        ]
    },{
        path:'/login',
        element:<LogIn/>
    },{
        path:'/signup',
        element:<SignUp/>

    },{
        path:'/dashboard',
        element:<PrivateRoute><DashBoard/></PrivateRoute>,
        loader:()=>fetch('https://tour-to-heart-server.vercel.app/users'),
        children:[
            {
                index:true,
                element:<PrivateRoute><Myprofile/></PrivateRoute>
            },{
                path:'booked',
                element:<PrivateRoute><Mybooking/></PrivateRoute>,
                loader:()=>fetch('https://tour-to-heart-server.vercel.app/booked')
            },{
                path:'wish',
                element:<PrivateRoute><MywishList/></PrivateRoute>,
                loader:()=>fetch('https://tour-to-heart-server.vercel.app/wishlist')
            },{
                path:'addtour',
                element:<PrivateRoute><AddTour/></PrivateRoute>
            },{
                path:'userlist',
                element:<PrivateRoute><UserList/></PrivateRoute>,
                loader:()=>fetch('https://tour-to-heart-server.vercel.app/users')
            }
        ]
    }
])


export default Routes;