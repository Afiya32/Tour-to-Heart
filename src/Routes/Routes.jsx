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
                element:<AllPackages/>,
              
            },{
                path:'tour-details/:id',
                element:<PackagesDetails/>,
                loader:({params})=> fetch(`http://localhost:5000/tour/${params.id}`)
                 },{
                    path:'guideprofile/:id',
                    element:<GuideProfile/>,
                    loader:({params})=> fetch(`http://localhost:5000/guides/${params.id}`)
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
        element:<DashBoard/>
    }
])


export default Routes;