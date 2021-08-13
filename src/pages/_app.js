import {
  ChakraProvider,
  ColorModeProvider,
} from "@chakra-ui/react";
import Head from "next/head";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
          <Head>
            <link rel="shortcut icon" href="/loki_logo_main.svg" />{" "}
          </Head>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
