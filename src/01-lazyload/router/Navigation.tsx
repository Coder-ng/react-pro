import { Link, useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import { LazyPage1, LazyPage2 } from "../pages";

export const Navigation = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Navigation</h2>
      <ul>
        <li>
          <Link to={`${url}/lazy1`}>Lazy page 1</Link>
        </li>
        <li>
          <Link to={`${url}/lazy2`}>Lazy page 2</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={`${path}/lazy1`}>
          <LazyPage1 />
        </Route>
        <Route exact path={`${path}/lazy2`}>
          <LazyPage2 />
        </Route>

        <Redirect to={`${path}/lazy1`} />
      </Switch>
    </div>
  );
};
