import React from 'react'
import {Flex, Heading} from '@chakra-ui/react'
export default function Nav() {
  return (
    <Flex bgColor='pink.100' h='10vh' w="100%" alignItems='center' pl="20px">
        <Heading  color='purple' fontSize='30px'>
            Sachi Events
        </Heading>
    </Flex>
  )
}
