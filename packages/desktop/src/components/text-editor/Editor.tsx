import {
  Plate,
  createPlateComponents,
  createPlateOptions,
  PlatePlugin,
  ELEMENT_IMAGE,
  PlateProps,
  createImagePlugin,
  getVoidTypes,
  useEventEditorId,
  useStoreEditorRef,
  getPlatePluginTypes,
  getPlatePluginType,
} from '@udecode/plate'
import { BaseElement, Editor } from 'slate'
import { useStore } from '../../store/store'
import { Emoticon } from '../emojis/Emoticon'
import { pluginsBasic } from './lib'
import { BallonToolbarMarks } from './Options'

export const ContentEditor = () => {
  const editor = useStoreEditorRef(useEventEditorId('focus'))
  const { setShowEmojiPicker } = useStore()
  const createOnKeyDownPlugin = (): PlatePlugin => {
    return {
      onKeyDown: (_editor) => (event) => {
        if (event.ctrlKey && event.code === 'Space') {
          setShowEmojiPicker(true)
        }
      },
    }
  }

  const components = createPlateComponents({
    [ELEMENT_IMAGE]: Emoticon,
  })
  editor && console.log(editor.selection)
  const options = createPlateOptions()
  return (
    <>
      <BallonToolbarMarks />
      <Plate
        components={components}
        options={options}
        editableProps={{
          placeholder: 'Type...',
          style: {},
        }}
        plugins={[...pluginsBasic, createOnKeyDownPlugin()]}
      />
    </>
  )
}
