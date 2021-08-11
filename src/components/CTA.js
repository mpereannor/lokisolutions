import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";

import { Container } from "./Container";
import { ChatButton, ContactButton } from "../components/elements/Button";
import cta_office from "../assets/cta_office.png";

export function CTA() {
  return (
    <Container>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        px={{ base: 10, md: 14 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as={"span"} position={"relative"}>
              Innovation
            </Text>
            <br />
            <Text as={"span"} color={"#24a9c5"}>
              meets speed and quality!
            </Text>
          </Heading>
          <Text color={"gray.700"}>
            Take your business to the next level with the help of our designers
            and engineers
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <ChatButton title="Lets Chat" variant="link" size="lg" />

            <Button
              fontWeight={"semibold"}
              px={8}
              borderBottom="4px"
              borderColor="#24a9c5"
              _hover={{ borderColor: "gray.800" }}
              height="52px"
              lineHeight="1.2"
              borderRadius="2px"
              size="2xl"
            >
              Check out our Products
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Office Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"/cta_office.png"}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
