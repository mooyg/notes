import { Image, Text } from '@chakra-ui/react'
import {
  AnyObject,
  getPlatePluginType,
  getPointFromLocation,
  getPointNextToVoid,
  SPRenderElementProps,
  SPRenderLeafProps,
  useEventEditorId,
  useStoreEditorRef,
} from '@udecode/plate'
import React, { PropsWithChildren, useEffect } from 'react'
import { Transforms } from 'slate'
import { useFocused, useSelected } from 'slate-react'
import { useStore } from '../../store/store'

export const Emoticon = (
  props: PropsWithChildren<SPRenderElementProps<AnyObject> | SPRenderLeafProps<AnyObject>>
) => {
  const { navigationKeyPressed } = useStore()
  const selected = useSelected()
  const focused = useFocused()
  const editor = useStoreEditorRef(useEventEditorId('focus'))
  useEffect(() => {
    if (selected && focused) {
      Transforms.select(
        editor!,
        getPointNextToVoid(editor!, {
          at: getPointFromLocation(editor!)!,
          ...(navigationKeyPressed === 'ArrowRight' && { after: true }),
        })
      )
    }
  }, [editor, focused, navigationKeyPressed, selected])
  return (
    <span {...props.attributes} style={{ display: 'inline-block' }}>
      <Image
        alt="emoji"
        aria-label="emoji"
        loading="lazy"
        height="6"
        style={
          {
            // boxShadow: `${selected && focused ? '0 0 0 2px #204961' : 'none'}`,
          }
        }
        src={`${props.element.src}`}
      />
      {props.children}
    </span>
  )
}
