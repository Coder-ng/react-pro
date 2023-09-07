import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "../logo.svg";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";
import { About } from "../02-component-patterns/pages/About";
import { Users } from "../02-component-patterns/pages/Users";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" activeClassName="nav-active" exact>
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="nav-active" exact>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active" exact>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <div>
          <Switch>
            <Route path="/">
              <ShoppingPage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
