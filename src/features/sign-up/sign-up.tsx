import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { theme } from "theme";
import { SignUpType, SignUpSchema } from "./sign-up-schema";

export const SignUpForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpType> = (data) => console.log(data);

  console.log(errors);

  return (
    <Box p={4} bg={theme.bg} padding={4} width="100%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={4} direction="column">
          <Input
            placeholder={t("sign-up-schema.email")}
            {...register("email")}
          />
          <Input
            placeholder={t("sign-up-schema.password")}
            {...register("password")}
          />
          <Input
            placeholder={t("sign-up-schema.confirm-password")}
            {...register("confirmPassword")}
          />
          <Input
            placeholder={t("sign-up-schema.first-name")}
            {...register("firstName")}
          />
          <Input
            placeholder={t("sign-up-schema.last-name")}
            {...register("lastName")}
          />
          <Button type="submit">{t("sign-up-schema.register")}</Button>
        </Flex>
      </form>
    </Box>
  );
};
