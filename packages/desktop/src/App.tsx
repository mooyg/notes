import { Flex, Link } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Sidebar } from './components/sidebar/Sidebar'
import { useLocalStorage } from './hooks/useLocalStorage'
import './styles/global.css'

export const App = (): JSX.Element => {
  const [, setUserId] = useLocalStorage<string>('qid', '')
  useEffect(() => {
    const query = window.location.search
    const urlParams = new URLSearchParams(query)
    const userId = urlParams.get('userId')
    if (userId) setUserId(userId)
  }, [setUserId])
  return (
    <Flex minHeight="100vh" flex="0.8">
      <Sidebar />
      <Link href="http://localhost:8080/api/auth/github">Login</Link>
    </Flex>
  )
}
