import { Button } from '@chakra-ui/button'
import { Box, HStack } from '@chakra-ui/layout'
import React from 'react'
import { BaseEditor, BaseSelection, Editor, Location, Transforms } from 'slate'
import { ReactEditor } from 'slate-react'

interface IOptions {
  editor: BaseEditor & ReactEditor
  location: BaseSelection
}
export const Options = ({ editor, location }: IOptions) => {
  return (
    <Box>
      <HStack>
        <Button size="xs">H 1</Button>
        <Button
          size="xs"
          onClick={() => {
            console.log(location)
            Transforms.setNodes(
              editor,
              { type: 'code' },
              {
                at: location?.anchor,
              }
            )
          }}
        >
          {'<>'}
        </Button>
      </HStack>
    </Box>
  )
}
