import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: HomeComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <HomeComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;
