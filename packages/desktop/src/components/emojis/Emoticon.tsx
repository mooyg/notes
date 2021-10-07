import { Image, Text } from '@chakra-ui/react'
import {
  AnyObject,
  SPRenderElementProps,
  SPRenderLeafProps,
  useStoreEditorRef,
} from '@udecode/plate'
import React, { PropsWithChildren } from 'react'
import { useFocused, useSelected } from 'slate-react'

export const Emoticon = (
  props: PropsWithChildren<SPRenderElementProps<AnyObject> | SPRenderLeafProps<AnyObject>>
) => {
  const selected = useSelected()
  const focused = useFocused()
  return (
    <div {...props.attributes} style={{ display: 'inline-block' }}>
      <Image
        alt="emoji"
        loading="lazy"
        height="6"
        style={{
          boxShadow: `${selected && focused ? '0 0 0 2px #204961' : 'none'}`,
        }}
        src={`${props.element.src}`}
      />
      {props.children}
    </div>
  )
}
