import { Home, SignIn, SignUp } from "screens";
import App from "../App";

export type RouteConfig = {
  element: JSX.Element;
  path?: string;
  children?: RouteConfig[];
  key: string;
};

export const routes: RouteConfig[] = [
  {
    element: <App />,
    key: "1",
    children: [
      {
        element: <Home />,
        path: "/",
        key: "2",
      },
      {
        element: <SignIn />,
        path: "/sign-in",
        key: "3",
      },
      {
        element: <SignUp />,
        path: "/sign-up",
        key: "4",
      },
    ],
  },
];
