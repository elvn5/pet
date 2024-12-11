import { Box, createListCollection, Flex } from "@chakra-ui/react";
import { Icon } from "assets";
import {
  Avatar,
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "components/ui";
import { ColorModeButton } from "components/ui/color-mode";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export function NavigationBar() {
  const nav = useNavigate();
  const { i18n } = useTranslation();

  const onPressProfile = () => {
    nav("/register");
  };

  const onChangeLocale = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Box bg={{ base: "blue.500", _dark: "blue.950" }} p="4" width="100%">
      <Box className="container">
        <Flex justify="space-between" alignItems="center">
          <Icon name="logo" cursor="pointer" />
          <Box>
            <Flex gap={4}>
              <SelectRoot
                onValueChange={({ value }) => onChangeLocale(value[0])}
                width={100}
                collection={frameworks}
                size="sm"
              >
                <SelectTrigger>
                  <SelectValueText placeholder="Select movie" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.items.map((movie) => (
                    <SelectItem item={movie} key={movie.value}>
                      {movie.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
              <ColorModeButton />
              <Avatar cursor="pointer" onClick={onPressProfile} />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

const frameworks = createListCollection({
  items: [
    { label: "Русский", value: "ru" },
    { label: "English", value: "en" },
  ],
});
