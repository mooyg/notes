/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { useHistory } from 'react-router'
import { useUser } from '../hooks/useUser'
export const Home = () => {
  //   const history = useHistory()
  const { user, setUser } = useUser()
  useEffect(() => {
    setUser({
      id: '298173132',
      userProfilePicture: '',
      username: 'mooy',
    })
    // history.push('/login')
  }, [])
  return (
    <Flex minHeight="100vh" flex="0.8">
      <Sidebar />
    </Flex>
  )
}
