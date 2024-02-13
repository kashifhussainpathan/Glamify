import React from "react";
import { useToken } from "@hooks";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { token } = useToken();

  return token ? children : <Navigate to="/profile" />;
};

export default PrivateRoute;
