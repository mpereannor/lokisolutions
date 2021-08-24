import { Box } from "@chakra-ui/react";

export const ContactButton = ({ title }) => (
  <Box
    as="button"
    height="48px"
    lineHeight="1.2"
    px="8px"
    borderRadius="2px"
    fontWeight="semibold"
    color="white"
    bg="mainCyan"
    _hover={{ color: "white", bg: "bgCadet" }}
  >
    {title}
  </Box>
);
export const ChatButton = ( { title }, ...props) => (
  <Box
    as="button"
    height="52px"
    lineHeight="1.2"
    px="8px"
    borderRadius="2px"
    fontWeight="semibold"
    size="2xl"
   
    color="white"
    bg="#285474"
    _hover={{ color: "#24a9c5", bg: "#d7f2f8" }}
  >
    {title}
  </Box>
);
