// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { authContext } from "../AuthProviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const { user, loading} = useContext(authContext);
  const location = useLocation();
    
  if (loading){
  return <div className= "  w-full  border-blue-300 shadow rounded-md p-4 max-w-sm mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-slate-200 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-200 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-200 rounded col-span-2"></div>
          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>
    
  }
  if (user){
    return children;
  }

  return  <Navigate state={{ from: location }} to="/login" replace/>
      

};

export default PrivateRoutes;
