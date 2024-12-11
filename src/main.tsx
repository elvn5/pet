import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes } from "react-router";
import { ChakraProvider } from "@chakra-ui/react";

import { renderRoutes } from "utils/map-routes.tsx";
import { ColorModeProvider } from "components/ui/color-mode.tsx";
import { themeSystem } from "theme/index.ts";
import { routes } from "routes/index.tsx";

import "translations/init-i18n";

import "styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ChakraProvider value={themeSystem}>
      <ColorModeProvider>
        <Routes>{renderRoutes(routes)}</Routes>
      </ColorModeProvider>
    </ChakraProvider>
  </BrowserRouter>
);
