// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { authContext } from "../AuthProviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const { user, Loading} = useContext(authContext);
  const location = useLocation();
    console.log("user in private route",  user);
  if (Loading){
    return <p>loading...</p>
  }
  if (user){
    return children;
  }

  return (
    <Navigate state={{ from: location }} to="/login" replace>
      {" "}
    </Navigate>
  );
};

export default PrivateRoutes;
