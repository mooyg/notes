import { Button } from '@chakra-ui/button'
import { Box, HStack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { BaseEditor, Descendant, Editor, Element, Transforms } from 'slate'
import { ReactEditor } from 'slate-react'
import { CustomText } from '../../typings/slate'
import { useTextSelection } from 'use-text-selection'

interface IOptions {
  editor: BaseEditor & ReactEditor
  value?: Descendant[]
}
export const Options = ({ editor, value }: IOptions) => {
  const { clientRect } = useTextSelection()
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
  console.log(clientRect)
  return (
    <Box pos="absolute" top={clientRect?.top} bottom={clientRect?.bottom}>
      <HStack bg="gray.800" p="2px">
        <Button size="xs" onClick={() => changeElementType('heading')}>
          H 1
        </Button>
        <Button size="xs" onClick={() => changeElementType('code')}>
          {'<>'}
        </Button>
      </HStack>
    </Box>
  )
}
