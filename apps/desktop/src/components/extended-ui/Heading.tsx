import React from 'react'
import { Heading as ChakraHeading } from '@chakra-ui/react'
import { RenderElementProps } from 'slate-react'
export const Heading = (props: RenderElementProps) => {
  return <ChakraHeading {...props.attributes}>{props.children}</ChakraHeading>
}
