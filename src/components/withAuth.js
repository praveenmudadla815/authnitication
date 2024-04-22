import React from "react";
import { Redirect } from "react-router-dom";

const withAuth = (DashBoard) => {
  const AuthRoute = (props) => {
    const isAuthinticated = ap;
    if (!isAuthinticated) {
      return <Redirect to="/login" />;
    } else {
      return <DashBoard {...props} />;
    }
  };
  return AuthRoute;
};

export default withAuth;
