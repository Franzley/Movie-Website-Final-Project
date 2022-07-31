import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../firebase/AuthContext";

//If there is no currently signed in user detected, redirect to login page
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
