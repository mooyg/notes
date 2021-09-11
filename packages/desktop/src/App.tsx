import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import useSWR from 'swr'
import { fetcher } from './axios/axios'
import { Sidebar } from './components/sidebar/Sidebar'
import { useLocalStorage } from './hooks/useLocalStorage'
import './styles/global.css'

export const App = (): JSX.Element => {
  const [, setUserId] = useLocalStorage<string>('qid', '')
  const { data } = useSWR('/user/cookie', fetcher)
  useEffect(() => {
    setUserId(data)
  }, [data, setUserId])
  return (
    <Flex minHeight="100vh" flex="0.8">
      <Sidebar />
    </Flex>
  )
}
