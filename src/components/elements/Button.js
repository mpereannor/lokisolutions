import { Box } from "@chakra-ui/react";
export const ContactButton = () => (
  <Box
    as="button"
    height="48px"
    lineHeight="1.2"
    px="8px"
    borderRadius="2px"
    fontWeight="semibold"
    color="#24a9c5"
    bg="#d7f2f8"
    _hover={{ color: "white", bg: "#285474" }}
  >
    Contact Us
  </Box>
);
