import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import useSWR from 'swr'
import { fetcher } from './axios/axios'
import { Sidebar } from './components/sidebar/Sidebar'
import { useLocalStorage } from './hooks/useLocalStorage'
import './styles/global.css'

export const App = (): JSX.Element => {
  const [name, setName] = useLocalStorage<string>('qid', '')
  const { data } = useSWR('/user/cookie', fetcher)
  useEffect(() => {
    setName(data)
  }, [data, setName])
  return (
    <Flex minHeight="100vh" flex="0.8">
      <Sidebar />
    </Flex>
  )
}
