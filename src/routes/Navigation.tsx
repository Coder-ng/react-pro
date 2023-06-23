import { Suspense } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import logo from "../logo.svg";

import { routes } from "./routes";


export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ path, to, name }) => (
                <li key={path}>
                  <NavLink to={to} activeClassName="nav-active" exact>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} component={() => <Component />} />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
