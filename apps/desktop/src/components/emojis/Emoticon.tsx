import { Image, Text } from '@chakra-ui/react'
import {
  AnyObject,
  getPlatePluginType,
  getPointFromLocation,
  getPointNextToVoid,
  getSelectionText,
  SPRenderElementProps,
  SPRenderLeafProps,
  useEventEditorId,
  useStoreEditorRef,
  useStoreEditorSelection,
} from '@udecode/plate'
import React, { PropsWithChildren, useEffect } from 'react'
import { Transforms } from 'slate'
import { useFocused, useSelected } from 'slate-react'
import { useStore } from '../../store/store'
export const Emoticon = (
  props: PropsWithChildren<SPRenderElementProps<AnyObject> | SPRenderLeafProps<AnyObject>>
) => {
  const selected = useSelected()
  const focused = useFocused()
  const editor = useStoreEditorRef(useEventEditorId('focus'))
  const selectionText = editor && getSelectionText(editor)
  const navigationKeyPressed = useStore((state) => state.navigationKeyPressed)
  useEffect(() => {
    if (selected && focused) {
      if (!selectionText) {
        Transforms.select(
          editor!,
          getPointNextToVoid(editor!, {
            at: getPointFromLocation(editor!)!,
            ...(navigationKeyPressed === 'ArrowRight' && { after: true }),
          })
        )
      } else {
        return
      }
    }
  }, [editor, focused, navigationKeyPressed, selected, selectionText])
  return (
    <span
      aria-label={`${props.element.shortName}`}
      {...props.attributes}
      style={{ display: 'inline-block' }}
    >
      <Image
        alt={`${props.element.shortName}`}
        aria-label={`${props.element.shortName}`}
        loading="lazy"
        height="6"
        draggable="false"
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
