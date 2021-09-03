import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import Admin from "../Admin/Admin";
const PrivateRoute = () => {
  const location = useLocation();
  return (
    <Route>
      {user == true ? (
        <Admin />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      )}
    </Route>
  );
};

export default PrivateRoute;
