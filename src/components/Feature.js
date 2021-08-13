import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
  Heading,
  HStack,
  VStack,
  Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { FaCloudMeatball, FaUsersCog, FaNetworkWired } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={700} fontSize={"xl"}>
        {title}
      </Text>
      <Text color={"gray.800"}>{text}</Text>
    </Stack>
  );
};

export default function MainFeauture() {
  return (
    <Box p={4} bg="#d7f2f8">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Text
          fontFamily={"heading"}
          fontWeight={700}
          textTransform={"uppercase"}
          mb={3}
          fontSize={"xl"}
          color={"#285474"}
        >
          Services
        </Text>
        <Heading
          lineHeight={1.2}
          fontwWeight={500}
          fontSize={{ base: "3xl", md: "5xl" }}
        >
          Explore Our Offerings
        </Heading>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={6}>
        <Feature
          icon={<Icon as={FaCloudMeatball} color={"#285474"} w={10} h={10} />}
          title={"Software Development"}
          text={
            "we deliver scalable and reliable software solutions for any browser, device and operating system. Merging our perspectives from other fields with the latest and tested IT tools, we are able to deliver custom solutions and products that perfectly fit the needs of our clients"
          }
        />
        <Feature
          icon={<Icon as={FaUsersCog} color={"#285474"} w={10} h={10} />}
          title={"UX/UI Design"}
          text={
            "we combine the latest UI/UX trends with our clients' individual goals and needs to deliver beautiful designs that helps businesses grow"
          }
        />
        <Feature
          icon={<Icon as={FaNetworkWired} color={"#285474"} w={10} h={10} />}
          title={"Consulting"}
          text={
            "Our engineers and designers Our experts can help to develop and implement an effective software development strategy, assist in smooth digital transformation and system integration as well as advise on improvements to your digital customer experience"
          }
        />
      </SimpleGrid>
    </Box>
  );
}

const features = [
  {
    id: 1,
    title: "Inventory Management Application",
    desc: "Inventory management software that makes trakcing stock accurately",
  },
  {
    id: 2,
    title: "Education Management Application",
    desc: "All-in-One information management system for your K12 school",
  },
  {
    id: 3,
    title: "Microfinance Enterprise Application",
    desc: "Simple to use app to manage your Susu(micro-finance) business",
  },
];

export function ProductFeature() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Text
          fontFamily={"heading"}
          fontWeight={700}
          textTransform={"uppercase"}
          mb={3}
          fontSize={"xl"}
          color={"#285474"}
        >
          Products
        </Text>
        <Heading
          lineHeight={1.2}
          fontwWeight={500}
          fontSize={{ base: "3xl", md: "5xl" }}
        >
          Solutions We Deliver
        </Heading>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Center p={"2"} h={{ base: "20", md: "40" }} bg={"#285474"}>
                <Text color={"whiteAlpha.900"} fontSize={"xl"} fontWeight={600}>
                  {feature.title}
                </Text>
                <Box p={"4"} _hover={{ cursor: "pointer" }}>
                  <Popover>
                    <PopoverTrigger>
                      <ArrowRightIcon color={"white"} />
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent bg={"gray.50"} h={"40"}>
                        <PopoverBody>
                          <Text color={"gray.600"}>{feature.desc}</Text>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </Box>
              </Center>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
