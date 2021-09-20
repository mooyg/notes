import { Button } from '@chakra-ui/button'
import { Box, HStack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { BaseEditor, Descendant, Editor, Element, Transforms } from 'slate'
import { ReactEditor } from 'slate-react'

interface IOptions {
  editor: BaseEditor & ReactEditor
  value?: Descendant[]
}
export const Options = ({ editor, value }: IOptions) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <Box>
      <HStack>
        <Button size="xs">H 1</Button>
        <Button
          size="xs"
          onClick={() => {
            const match = Element.matches(editor.getFragment()[0] as Element, {
              type: 'code',
            })
            setIsActive(match)
            match
              ? Transforms.unwrapNodes(editor, {
                  match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === 'code',
                })
              : Transforms.wrapNodes(editor, { type: 'code', children: [] }, { split: true })
          }}
        >
          {'<>'}
        </Button>
      </HStack>
    </Box>
  )
}
