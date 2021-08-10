import { Flex } from '@chakra-ui/react'

export const Container = (props) => {

  const bgColor = { light: 'gray.50' }

  const color = { light: 'black' }
  return (
    <Flex
      direction="column"
      // alignItems="center"
      justifyContent="flex-start"
      bg={bgColor.light}
      color={color.light}
      {...props}
    />
  )
}
