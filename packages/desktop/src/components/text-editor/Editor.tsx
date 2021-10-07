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
  ELEMENT_DEFAULT,
  getPointNextToVoid,
  getPointFromLocation,
} from '@udecode/plate'
import { Location, Editor, Point } from 'slate'
import { useStore } from '../../store/store'
import { Emoticon } from '../emojis/Emoticon'
import { DefaultElement } from './DefaultElement'
import { pluginsBasic } from './lib'
import { BallonToolbarMarks } from './Options'

export const ContentEditor = () => {
  const editor = useStoreEditorRef(useEventEditorId('focus'))
  const { setShowEmojiPicker, setNavigationKeyPressed } = useStore()
  const createOnKeyDownPlugin = (): PlatePlugin => {
    return {
      onKeyDown: (_editor) => (event) => {
        if (event.ctrlKey && event.code === 'Space') {
          setShowEmojiPicker(true)
        }
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          setNavigationKeyPressed(event.key)
        }
      },
    }
  }

  const components = createPlateComponents({
    [ELEMENT_IMAGE]: Emoticon,
    [ELEMENT_DEFAULT]: DefaultElement,
  })

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
