import { Flex, Avatar, GridItem } from '@chakra-ui/react'
import { useUser } from '../../hooks/useUser'
import { Options } from './Options'
import React from 'react'
import { Templates } from './templates/Templates'

export const Sidebar = (): JSX.Element => {
  const { user } = useUser()
  return (
    <Flex position="sticky" top="0" minH="100vh" p="2" bgColor="secondary.bg">
      <Flex minW="full" flexDir="column">
        <Avatar src={user?.userProfilePicture} />
        <Options />
        <Templates />
      </Flex>
    </Flex>
  )
}
