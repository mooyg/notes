import {
  Plate,
  createPlateComponents,
  createPlateOptions,
  PlatePlugin,
  ELEMENT_IMAGE,
  ELEMENT_DEFAULT,
  isSelectionExpanded,
  getSelectionText,
  useEventEditorId,
  useStoreEditorRef,
} from '@udecode/plate'
import { useEffect, useMemo } from 'react'
import { useStore } from '../../store/store'
import { Emoticon } from '../emojis/Emoticon'
import { DefaultElement } from './DefaultElement'
import { pluginsBasic } from './lib'
import { BallonToolbarMarks } from './Options'
import { useSelected } from 'slate-react'

export const ContentEditor = () => {
  const setShowEmojiPicker = useStore((state) => state.setShowEmojiPicker)
  const setNavigationKeyPressed = useStore((state) => state.setNavigationKeyPressed)
  const createOnKeyDownPlugin = (): PlatePlugin => {
    return {
      onKeyDown: (_editor) => (event) => {
        if (event.ctrlKey && event.code === 'Space') {
          setShowEmojiPicker(true)
        }
        // TODO: Not use state here and use some other logic
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
          placeholder: 'Type... ',
          style: {
            fontSize: '15px',
          },
        }}
        plugins={[...pluginsBasic, createOnKeyDownPlugin()]}
      />
    </>
  )
}
