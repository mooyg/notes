/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { useAccessToken } from '../hooks/useAccessToken'
import { useInitialAuth } from '../hooks/useInitialAuth'
import { useHistory } from 'react-router'

export const Home = () => {
  const history = useHistory()
  const accessToken = useAccessToken()

  useEffect(() => {
    if (!accessToken) return history.push('/login')
  }, [])

  useInitialAuth(accessToken!)

  return (
    <Flex minHeight="100vh" flex="0.8">
      <Sidebar />
    </Flex>
  )
}
