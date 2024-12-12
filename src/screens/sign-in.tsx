import { Box } from "@chakra-ui/react";
import i18next from "i18next";

export const SignIn = () => {
  return <Box bg="blue.800">{i18next.t("sign-in")}</Box>;
};
