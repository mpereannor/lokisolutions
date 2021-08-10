import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading
      fontSize="10vw"
      bg={"black"}
      bgClip="text"
    >
      {title}
    </Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'loki solutions',
}
