import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  heading: `'Noto Sans JP', 'Open Sans','Menlo', monospace`,
  body: `'Roboto', 'Open Sans', 'Menlo', monospace`,
};

const styles = {
  global: {
      html: {
      boxSizing: "border-box",
      color: "black",
      bg: "gray.50",
      padding: "0",
      margin: "0",
    },
    "*": {
      boxSizing: "inherit"
    },
    "*:before": {
      boxSizing: "inherit"
      
    },
    "*:after": {
      boxSizing: "inherit"

    },
    body: {
      color: "black",
      bg: "gray.50",
      padding: "0",
      margin: "0",
    },

  },
};
const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});



const colors = { 
  black: "#16161D",
  mainCyan: "#24a9c5",
  lightCyan: "#d7f2f8",
  bgCadet: "#285474",
}

const theme = extendTheme({
  styles,
  colors,
  fonts,
  // breakpoints,
});

export default theme;
