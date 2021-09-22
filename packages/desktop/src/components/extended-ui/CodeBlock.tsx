import React from 'react'
import { Code } from '@chakra-ui/react'
import { RenderElementProps } from 'slate-react'
export const CodeBlock = (props: RenderElementProps) => {
  return <Code {...props.attributes}>{props.children}</Code>
}
