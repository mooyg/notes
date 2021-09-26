import { Flex, VStack } from '@chakra-ui/layout'
import React from 'react'
import { Editor } from 'slate'
import { IPage } from '../../interfaces'
import { Header } from '../header/Header'
import { ContentEditor } from '../text-editor/Editor'
import { ContentHeader } from './ContentHeader'

interface IContent {
  content: IPage
}
export const Content = ({ content }: IContent) => {
  return (
    <Flex flex="1" flexDir="column" experimental_spaceY="7">
      <Header page={content} />

      <Flex flexDir="column" experimental_spaceY="10">
        <ContentHeader />
        <ContentEditor />
      </Flex>
    </Flex>
  )
}
