import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Sidebar } from './sidebar/Sidebar'

type Layout = {
  children?: ReactNode
}
export const Layout = ({ children }: Layout) => {
  return (
    <Flex>
      <Sidebar />
      {children}
    </Flex>
  )
}
