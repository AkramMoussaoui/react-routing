import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
const Job = () => {
  const route = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${route.url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${route.url}/boots`}>Boots</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${route.path}`} render={() => <p>Home job</p>} />
        <Route path={`${route.path}/shoes`} render={() => <p>Shoes job</p>} />
        <Route path={`${route.path}/boots`} render={() => <p>Boots job</p>} />
      </Switch>
    </div>
  );
};

export default Job;
