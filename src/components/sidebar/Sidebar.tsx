import { Flex, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Options } from './Options'
export const Sidebar = (): JSX.Element => {
  return (
    <Flex p="2" bgColor="secondary.bg" flex="0.2">
      <Flex flexDir="column">
        <Avatar />
        <Options />
      </Flex>
    </Flex>
  )
}
