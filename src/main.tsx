import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ChakraProvider } from "@chakra-ui/react";
import { themeSystem } from "./theme/index.ts";
import { routes } from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <ChakraProvider value={themeSystem}>
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route key={route.path} element={route.element} path={route.path} />
          );
        })}
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
