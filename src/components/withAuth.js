import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const withAuth = (DashBoard) => {
  const AuthRoute = (props) => {
    const isAuthinticated = useAuth();
    if (!isAuthinticated) {
      return <Navigate to="/login" />;
    } else {
      return <DashBoard {...props} />;
    }
  };
  return AuthRoute;
};

export default withAuth;
