import { HStack } from '@chakra-ui/layout'
import {
  BalloonToolbar,
  ToolbarMark,
  getPlatePluginType,
  MARK_BOLD,
  useStoreEditorRef,
  useEventEditorId,
  MARK_UNDERLINE,
  MARK_ITALIC,
  ELEMENT_CODE_BLOCK,
  ToolbarElement,
} from '@udecode/plate'
import { Transforms } from 'slate'
import { BoldIcon } from '../icons/BoldIcon'
import { CodeBlockIcon } from '../icons/CodeBlockIcon'
import { ItalicIcon } from '../icons/ItalicIcon'
import { UnderlineIcon } from '../icons/UnderlineIcon'
import React from 'react'
export const BallonToolbarMarks = () => {
  const editor = useStoreEditorRef(useEventEditorId('focus'))

  const arrow = true
  const theme = 'dark'
  const direction = 'top'

  return (
    <BalloonToolbar direction={direction} theme={theme} arrow={arrow}>
      <HStack>
        <ToolbarMark type={getPlatePluginType(editor, MARK_BOLD)} icon={<BoldIcon />} />
        <ToolbarMark type={getPlatePluginType(editor, MARK_UNDERLINE)} icon={<UnderlineIcon />} />
        <ToolbarMark type={getPlatePluginType(editor, MARK_ITALIC)} icon={<ItalicIcon />} />
        <ToolbarElement
          type={getPlatePluginType(editor, ELEMENT_CODE_BLOCK)}
          icon={<CodeBlockIcon />}
        />
      </HStack>
    </BalloonToolbar>
  )
}
