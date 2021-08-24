import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../theme";

import "@fontsource/noto-sans-jp";
import "@fontsource/open-sans";
import "@fontsource/roboto"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/loki_logo_main.svg" />{" "}
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
