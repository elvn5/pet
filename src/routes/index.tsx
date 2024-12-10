import App from "../App";

type RouteConfig = {
  element: JSX.Element;
  path: string;
  children?: RouteConfig[];
};

export const routes: RouteConfig[] = [
  {
    element: <App />,
    path: "/",
    children: [],
  },
];
