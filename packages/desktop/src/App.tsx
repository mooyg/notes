import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Sidebar } from './components/sidebar/Sidebar'
import './styles/global.css'

export const App = (): JSX.Element => {
  return (
    <Flex minHeight="100vh" flex="0.8">
      <Sidebar />
    </Flex>
  )
}
