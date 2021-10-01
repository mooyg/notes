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
import { CodeBlockIcon } from '../icons/CodeBlockIcon'
import { ItalicIcon } from '../icons/ItalicIcon'
import { UnderlineIcon } from '../icons/UnderlineIcon'
export const BallonToolbarMarks = () => {
  const editor = useStoreEditorRef(useEventEditorId('focus'))

  const arrow = true
  const theme = 'dark'
  const direction = 'top'
  const tooltip: any = {
    arrow: true,
    delay: 0,
    duration: [200, 0],
    hideOnClick: false,
    offset: [0, 17],
    placement: 'top',
  }

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
