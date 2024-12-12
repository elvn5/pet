import { Box } from "@chakra-ui/react";
import { SignUpForm } from "features/sign-up";
import { theme } from "theme";

export const SignUp = () => {
  return (
    <Box bg={theme.bg} className="container" width="100%" mt={8}>
      <SignUpForm />
    </Box>
  );
};
