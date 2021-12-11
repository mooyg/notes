import React, { useCallback } from 'react'
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
  useStoreEditorValue,
} from '@udecode/plate'
import { useEffect, useMemo } from 'react'
import { useStore } from '../../store/store'
import { Emoticon } from '../emojis/Emoticon'
import { DefaultElement } from './DefaultElement'
import { pluginsBasic } from './lib'
import { BallonToolbarMarks } from './Options'
import { useSelected } from 'slate-react'
import { debounce } from 'lodash'
import { useMutation } from 'urql'
import axios from '../../axios/axios'

export const ContentEditor = () => {
  const value = useStoreEditorValue()
  const setShowEmojiPicker = useStore((state) => state.setShowEmojiPicker)
  const setNavigationKeyPressed = useStore((state) => state.setNavigationKeyPressed)
  const navigationKeyPressed = useStore((state) => state.navigationKeyPressed)
  const activePage = useStore((state) => state.activePage)
  console.log('Active Page inside editor', activePage)

  const saveToDatabase = debounce(async () => {
    console.log('DEBOUNCED FUNCTION')
    await axios({
      method: 'POST',
      url: `pages/save/${activePage?.id}`,
      data: {
        content: value,
      },
    })
  }, 500)

  const createOnKeyDownPlugin = (): PlatePlugin => {
    return {
      onKeyDown: (_editor) => (event) => {
        if (event.ctrlKey && event.code === 'Space') {
          setShowEmojiPicker(true)
        }
        if (event.key === navigationKeyPressed) return
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
        value={activePage?.content}
        editableProps={{
          placeholder: 'Type... ',
          style: {
            fontSize: '15px',
          },
        }}
        onChange={() => saveToDatabase()}
        plugins={[...pluginsBasic, createOnKeyDownPlugin()]}
      />
    </>
  )
}
