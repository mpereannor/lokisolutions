import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  Textarea,
} from "@chakra-ui/react";

import { BackgroundLogoIcon } from "./elements/Icon";

export function ContactForm() {
  return (
    <Box
      position={"relative"}
      bgImage="url('/loki_logo.svg')"
      bgPosition={{
        base: "top right",
        md: "top right",
        lg: "top right",
      }}
      // "bottom left"
      bgRepeat="no-repeat"
    >
      <Container
        p={{ base: 4, sm: 6, md: 8 }}
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 24 }}
      >
        <Stack spacing={{ base: 10, md: 12 }}>
          <Heading
            color={"gray.800"}
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
          >
            Need a Consultation{" "}
            <Text as={"span"} bg="#285474" bgClip="text">
              ?
            </Text>{" "}
          </Heading>
          <Stack spacing={4} align={"left"}>
            <Box>
              <Heading>Our Contact Details</Heading>
            </Box>
            <Box textTransform="uppercase">
              <Text fontWeight="bold">ADDRESS</Text>
              <Text color={"gray.700"}>GS-0163-6749 | NR WEST HILLS MALL</Text>
              <Text color={"gray.700"}>Accra - Ghana</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">WHATSAPP:</Text>
              <Text color={"gray.700"}>+233 555 95 99 66</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">EMAIL:</Text>
              <Text color={"gray.700"}>loki.africa@gmail.com</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">FACEBOOK</Text>
              <Text color={"gray.700"}>@lokisolutions</Text>
            </Box>
          </Stack>
        </Stack>
        <Stack
          // bg={"gray.50"}
          rounded={"sm"}
          p={{
            md: 4,
          }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{
                base: "3xl",
                sm: "3xl",
                md: "4xl",
              }}
            >
              Contact Us
              <Text as={"span"} bg="#285474" bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={"gray.700"} fontSize={{ base: "sm", sm: "md" }}>
              Kindly fill out the form below if you want make an equiry or meet
              with us. We will respond as soon as possible.
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Full Name"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="Company Name"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="Email"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="Phone Number"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Textarea
                placeholer="How can we help you
                "
                color={"gray.500"}
                bg={"gray.100"}
                border={0}
                //fix: placeholder should display
                _placeholder={{
                  color: "green",
                }}
              />
            </Stack>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bg="#24a9c5"
              color={"white"}
              _hover={{
                boxShadow: "xl",
              }}
            >
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  );
}
