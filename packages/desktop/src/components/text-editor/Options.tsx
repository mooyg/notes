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
} from '@udecode/plate'
import { BoldIcon } from '../icons/BoldIcon'
import { ItalicIcon } from '../icons/ItalicIcon'
import { UnderlineIcon } from '../icons/UnderlineIcon'
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
      </HStack>
    </BalloonToolbar>
  )
}
