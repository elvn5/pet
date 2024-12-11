import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  return <Box bg="blue.800">{t("home")}</Box>;
};
