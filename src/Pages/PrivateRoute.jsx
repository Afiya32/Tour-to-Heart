/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate,  } from "react-router-dom";
import Loadingpage from "../Component/Loadingpage";


const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    
      if(loader){
        return <Loadingpage/>
      }
      if(user){
        return children;
      }
      return <Navigate to ='/login'></Navigate>
};

export default PrivateRoute;