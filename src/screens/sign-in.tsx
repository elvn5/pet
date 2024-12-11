import { Box } from "@chakra-ui/react";
import i18n from "translations/init-i18n";

export const SignIn = () => {
  return <Box bg="blue.800">{i18n.t("sign-in")}</Box>;
};
