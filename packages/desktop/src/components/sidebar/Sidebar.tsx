import { Flex, Avatar } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from '../../axios/axios'
import { IUser } from '../../interfaces'
import { Options } from './Options'
import { Templates } from './Templates'

export const Sidebar = (): JSX.Element => {
  const [user, setUser] = useState<IUser | null>()
  useEffect(() => {
    axios.get('/user', {}).then((res) => {
      setUser(res.data)
    })
  }, [])
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
