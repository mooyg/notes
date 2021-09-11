import { Flex, Avatar } from '@chakra-ui/react'
import useSWR from 'swr'
import { fetcher } from '../../axios/axios'

import { Options } from './Options'
import { Templates } from './Templates'

export const Sidebar = (): JSX.Element => {
  const { data: user } = useSWR('/user', fetcher)

  return (
    <Flex p="2" bgColor="secondary.bg" flex="0.2">
      <Flex minW="full" flexDir="column">
        <Avatar src={user?.userProfilePicture} />
        <Options />
        <Templates />
      </Flex>
    </Flex>
  )
}
