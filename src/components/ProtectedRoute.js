import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  // console.log("loggedIn", props.loggedIn);
  return props.loggedIn ? <Component {...props} /> : <Navigate to="/" />;
};

export default ProtectedRouteElement;
