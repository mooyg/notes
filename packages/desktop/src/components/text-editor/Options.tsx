import { getPlatePluginType, useEventEditorId, useStoreEditorRef } from '@udecode/plate-core'
import { ELEMENT_H1 } from '@udecode/plate-heading'
import { ToolbarElement } from '@udecode/plate-toolbar'
import { CodeBlockIcon } from '../icons/CodeBlockIcon'

export const ToolbarButtonsBasicElements = () => {
  const editor = useStoreEditorRef(useEventEditorId('focus'))

  return (
    <>
      <ToolbarElement type={getPlatePluginType(editor, ELEMENT_H1)} icon={<CodeBlockIcon />} />
    </>
  )
}
