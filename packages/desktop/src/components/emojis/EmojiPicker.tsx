import { Box, Flex, Heading } from '@chakra-ui/layout'
import React, { useEffect, useRef, useState } from 'react'
import { Emoji } from './Emoji'
import { groupedEmojiData } from './lib'
import { Button, IconButton } from '@chakra-ui/button'
import Draggable from 'react-draggable'
import { CloseIcon } from '../icons/CloseIcon'
import { useSlateStatic } from 'slate-react'
import { Transforms } from 'slate'
import { CustomElement } from '../../typings/slate'
import { useStore } from '../../store/store'

const createEmojiNode = (shortName: string): CustomElement => {
  return {
    type: 'emoji',
    shortName,
    children: [{ text: '' }],
  }
}
export const EmojiPicker = () => {
  const [currentCategory, setCurrentCategory] = useState('Smileys & Emotion')
  const { setShowEmojiPicker } = useStore()
  const editor = useSlateStatic()
  return (
    <Draggable>
      <Flex
        zIndex="1"
        p="1"
        position="absolute"
        top="0"
        justifyContent="space-between"
        bg="gray.700"
        flexDir="column"
        boxSize="sm"
        rounded="md"
      >
        <Flex flex="1" justifyContent="flex-end" alignContent="center">
          <IconButton
            onClick={() => setShowEmojiPicker(false)}
            variant="unstyled"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Flex>
        <Flex overflowY="scroll" flexWrap="wrap">
          {groupedEmojiData[currentCategory].map((item) => {
            return (
              <Button
                key={item.short_name}
                onClick={() => {
                  Transforms.insertNodes(editor, createEmojiNode(item.short_name), { select: true })
                }}
                variant="ghost"
              >
                <Emoji shortName={item.short_name} />
              </Button>
            )
          })}
        </Flex>
        <Flex flexWrap="wrap">
          {Object.keys(groupedEmojiData).map((category, index) => (
            <Box p="2">
              <Button key={index} onClick={() => setCurrentCategory(category)} size="xs">
                {category}
              </Button>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Draggable>
  )
}
