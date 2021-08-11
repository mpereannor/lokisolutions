import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
  Heading,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { FaCloudMeatball, FaUsersCog, FaNetworkWired } from "react-icons/fa"

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
      <Text fontWeight={700} fontSize={"xl"}>{title}</Text>
      <Text color={"gray.800"}>{text}</Text>
    </Stack>
  );
};

export default function MainFeauture() {
  return (
    <Box p={4} 
    // bg="#24a9c5"
    bg="#d7f2f8"
    // bg="#285474"
    >
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
        <Heading lineHeight={1.2} fontwWeight={500} fontSize={{base:"3xl", md: "5xl"}}>Explore our Offerings</Heading>
       
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={6}>
        <Feature
          icon={<Icon as={FaCloudMeatball} color={'#285474'}
          w={10} h={10} />}
          title={"Software Development"}
          text={
            "we deliver scalable and reliable software solutions for any browser, device and operating system. Merging our perspectives from other fields with the latest and tested IT tools, we are able to deliver custom solutions and products that perfectly fit the needs of our clients"
          }
        />
        <Feature
          icon={<Icon as={FaUsersCog}
          color={'#285474'}
          w={10} h={10} />}
          title={"UX/UI Design"}
          text={
            "we combine the latest UI/UX trends with our clients' individual goals and needs to deliver beautiful designs that helps businesses grow"
          }
        />
        <Feature
          icon={<Icon as={ FaNetworkWired }
          color={'#285474'}
           w={10} h={10} />}
          title={"Consulting"}
          text={
            "Our engineers and designers Our experts can help to develop and implement an effective software development strategy, assist in smooth digital transformation and system integration as well as advise on improvements to your digital customer experience"
          }
        />
      </SimpleGrid>
    </Box>
  );
}
