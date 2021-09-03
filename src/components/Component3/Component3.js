import React from "react";
import SubComp2 from "./SubComp2";
import SubComp1 from "./SubComp1";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

const Component3 = () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <div>Component3</div>
      <ul>
        <li>
          <Link to={`${url}/1`}>SubComp1</Link>
        </li>
        <li>
          <Link to={`${url}/2`}>SubComp2</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/:name`}>
          <SubComp1 />
        </Route>
      </Switch>
    </div>
  );
};

export default Component3;
