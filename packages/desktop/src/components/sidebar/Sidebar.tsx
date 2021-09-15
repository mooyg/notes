import { Flex, Avatar } from '@chakra-ui/react'
import { useUser } from '../../hooks/useUser'
import { Options } from './Options'
import { Templates } from './Templates'

export const Sidebar = (): JSX.Element => {
  const { user } = useUser()
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
