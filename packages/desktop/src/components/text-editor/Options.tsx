import { Button, IconButton } from '@chakra-ui/button'
import { Box, HStack } from '@chakra-ui/layout'
import React, { useEffect, useRef, useState } from 'react'
import { BaseEditor, Descendant, Editor, Element, Transforms } from 'slate'
import { ReactEditor, useSlate } from 'slate-react'
import { CustomText } from '../../typings/slate'
import { EmojiIcon } from '../icons/EmojiIcon'
import { useTextSelection } from 'use-text-selection'

interface IOptions {
  editor: BaseEditor & ReactEditor
  value?: Descendant[]
  location?:
    | Record<'height' | 'width' | 'x' | 'y' | 'bottom' | 'left' | 'right' | 'top', number>
    | undefined
}
export const Options = ({ editor, location }: IOptions) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    const { selection } = editor

    if (!el) {
      return
    }

    if (!selection || !ReactEditor.isFocused(editor) || Editor.string(editor, selection) === '') {
      el.removeAttribute('style')
      return
    }
    const domSelection = window.getSelection()
    const domRange = domSelection!.getRangeAt(0)
    const rect = domRange.getBoundingClientRect()
    el.style.opacity = '1'
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`
    el.style.left = `${rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2}px`
  })

  const changeElementType = (type: 'code' | 'heading' | 'paragraph') => {
    const [match] = Editor.nodes(editor, {
      match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === type,
    })
    match
      ? Transforms.unwrapNodes(editor, {
          match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === type,
        })
      : Transforms.wrapNodes(
          editor,
          { type, children: editor.getFragment() as CustomText[] },
          { split: true }
        )
  }
  return (
    <Box ref={ref} pos="absolute">
      <HStack borderRadius="md" bg="gray.800" p="2">
        <Button size="sm" onClick={() => changeElementType('heading')}>
          H 1
        </Button>
        <Button size="sm" onClick={() => changeElementType('code')}>
          {'<>'}
        </Button>
      </HStack>
    </Box>
  )
}
