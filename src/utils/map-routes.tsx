import { Route } from "react-router";
import { RouteConfig } from "routes";

export function renderRoutes(routes: RouteConfig[]) {
  return routes.map((route) => (
    <Route key={route.key} element={route.element} path={route.path}>
      {route.children?.length && renderRoutes(route.children)}
    </Route>
  ));
}
