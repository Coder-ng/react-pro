import { LazyExoticComponent, lazy } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const ShoppingPage = lazy(
  () => import("../02-component-patterns/pages/ShoppingPage")
);
const About = lazy(() => import("../02-component-patterns/pages/About"));
const Users = lazy(() => import("../02-component-patterns/pages/Users"));

export const routes: Route[] = [
  {
    to: "/ShoppingPage",
    path: "/ShoppingPage",
    name: "Home",
    Component: ShoppingPage,
  },
  {
    to: "/about",
    path: "/about",
    name: "About",
    Component: About,
  },
  {
    to: "/users",
    path: "/users",
    name: "Users",
    Component: Users,
  },
];
