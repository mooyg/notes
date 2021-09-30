import { Container, Flex, VStack } from '@chakra-ui/layout'
import React from 'react'
import { IPage } from '../../interfaces'
import { EmojiPicker } from '../emojis/EmojiPicker'
import { Header } from '../header/Header'
import { ContentEditor } from '../text-editor/Editor'
import { ContentHeader } from './ContentHeader'

interface IContent {
  content: IPage
}
export const Content = ({ content }: IContent) => {
  return (
    <Flex p="2" flex="1" flexDir="column" experimental_spaceY="7">
      <Header page={content} />
      <Container experimental_spaceY="10">
        <ContentHeader />
        <ContentEditor />
      </Container>
    </Flex>
  )
}
