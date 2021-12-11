import { Container, Flex, VStack } from '@chakra-ui/layout'
import React from 'react'
import { IPage } from '../../interfaces'
import { useStore } from '../../store/store'
import { Header } from '../header/Header'
import { ContentEditor } from '../text-editor/Editor'
import { ContentHeader } from './ContentHeader'

interface IContent {
  content: IPage
}
export const Content = () => {
  return (
    <Flex p="2" flex="1" flexDir="column" experimental_spaceY="7">
      <Header />
      <Container flexDir="column" experimental_spaceY="10">
        <ContentHeader />
        <ContentEditor />
      </Container>
    </Flex>
  )
}
