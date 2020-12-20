import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {

  const [currentUser] = useRecoilState(userState)

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};


export default PrivateRoute
