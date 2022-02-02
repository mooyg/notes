import React, { useCallback, useEffect, useRef } from 'react'
import {
  Plate,
  createPlateComponents,
  createPlateOptions,
  PlatePlugin,
  ELEMENT_IMAGE,
  ELEMENT_DEFAULT,
  useStoreEditorValue,
} from '@udecode/plate'
import { useStore } from '../../store/store'
import { Emoticon } from '../emojis/Emoticon'
import { DefaultElement } from './DefaultElement'
import { pluginsBasic } from './lib'
import { BallonToolbarMarks } from './Options'
import { debounce } from 'lodash'
import axios from '../../axios/axios'

export const ContentEditor = () => {
  const setShowEmojiPicker = useStore((state) => state.setShowEmojiPicker)
  const setNavigationKeyPressed = useStore((state) => state.setNavigationKeyPressed)
  const navigationKeyPressed = useStore((state) => state.navigationKeyPressed)
  const activePage = useStore((state) => state.activePage)
  const value = useStoreEditorValue(activePage?.id)
  const editorValue = useRef<any[] | undefined | null>(null)
  const activePageId = useRef<string | undefined | null>(null)

  useEffect(() => {
    editorValue.current = value
  }, [value])

  useEffect(() => {
    activePageId.current = activePage?.id
  }, [activePage])

  const saveToDatabase = useCallback(
    debounce(async () => {
      console.log(activePage?.id)
      await axios({
        method: 'POST',
        url: `pages/save/${activePageId.current}`,
        data: {
          content: editorValue.current,
        },
      })
    }, 500),
    []
  )

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
        id={activePage?.id}
        components={components}
        options={options}
        initialValue={activePage?.content}
        editableProps={{
          placeholder: 'Type... ',
          style: {
            fontSize: '15px',
          },
        }}
        onChange={() => {
          saveToDatabase()
        }}
        plugins={[...pluginsBasic, createOnKeyDownPlugin()]}
      />
    </>
  )
}
