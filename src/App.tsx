import { Flex } from "@chakra-ui/react";
import { NavigationBar } from "features";
import { Outlet } from "react-router";

function App() {
  return (
    <Flex width="100%" direction="column">
      <NavigationBar />
      <Outlet />
    </Flex>
  );
}

export default App;
