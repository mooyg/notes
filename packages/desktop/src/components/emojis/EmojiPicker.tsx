import { Box, Flex } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { Emoji } from './Emoji'
import { groupedEmojiData } from './lib'
import { Button, IconButton } from '@chakra-ui/button'
import Draggable from 'react-draggable'
import { CloseIcon } from '../icons/CloseIcon'
import { useStore } from '../../store/store'
import { useEventEditorId, useStoreEditorRef } from '@udecode/plate-core'
import { insertImage } from '../text-editor/lib'
import { Editor } from 'slate'
import { Input } from '@chakra-ui/react'

export const EmojiPicker = () => {
  const [currentCategory, setCurrentCategory] = useState('Smileys & Emotion')
  const { setShowEmojiPicker } = useStore()
  const editor = useStoreEditorRef(useEventEditorId('focus'))
  return (
    <Draggable bounds="parent">
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
          <Input placeholder="Search Emoji..." variant="filled" />
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
                variant="ghost"
                onClick={() => {
                  insertImage(editor, item.short_name)
                  editor && Editor.insertText(editor, ' ')
                }}
              >
                <Emoji shortName={item.short_name} />
              </Button>
            )
          })}
        </Flex>
        <Flex flexWrap="wrap">
          {Object.keys(groupedEmojiData).map((category, index) => (
            <Box p="2" key={index}>
              <Button onClick={() => setCurrentCategory(category)} size="xs">
                {category}
              </Button>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Draggable>
  )
}
