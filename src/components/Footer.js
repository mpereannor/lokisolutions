import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { LogoIcon } from "./elements/Icon";
import { BiMap } from "react-icons/bi";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"xl"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={"#285474"} color={"whiteAlpha.900"}>
      <Container as={Stack} maxW={"6xl"}
       pt={10}
       >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={"flex-start"}>
            {/* <ListHeader>Company</ListHeader> */}
              <Link href={"#"}>About Loki Solutions</Link>
            <HStack>
              <BiMap position="left" />
            <Link href={"#"}>GS-0163-6749 | NR WEST HILLS MALL</Link>
            </HStack>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>
          <Stack align={"flex-start"}>
            {/* <ListHeader>Legal</ListHeader> */}
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
          </Stack>
          <Stack align={"flex-start"}>
            {/* <ListHeader>Follow Us</ListHeader> */}
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>WhatsApp</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box 
      py={6}
      >
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "whiteAlpha.900",
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "whiteAlpha.900",
            flexGrow: 1,
            ml: 8,
          }}
        >
          <LogoIcon boxSize={{
              base: "40%",
              sm: "30%",
              md: "20%"
          }} />
        </Flex>
        <Text
         pt={2}
          fontSize={"sm"} textAlign={"center"}>
          © 2021 Loki Solutions. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
