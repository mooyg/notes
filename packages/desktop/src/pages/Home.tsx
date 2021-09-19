/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Flex, Grid } from '@chakra-ui/react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { useAccessToken } from '../hooks/useAccessToken'
import { useInitialAuth } from '../hooks/useInitialAuth'
import { useHistory } from 'react-router'
import { Content } from '../components/text-editor/Content'

export const Home = () => {
  const history = useHistory()
  const accessToken = useAccessToken()

  useEffect(() => {
    accessToken ? history.replace('/') : history.push('/login')
  }, [accessToken])

  useInitialAuth(accessToken!)

  return (
    <Grid minH="100vh" templateColumns="repeat(5, 1fr)">
      <Sidebar />
      <Content />
    </Grid>
  )
}
