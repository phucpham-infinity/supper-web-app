import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export const theme = extendTheme({ colors });

export const ThemeProvider = (props: any) => (
  <ChakraProvider resetCSS theme={theme}>
    {props.children}
  </ChakraProvider>
);
