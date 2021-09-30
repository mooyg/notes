import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createEditor, Descendant, Editor, Location } from 'slate'
import { Slate, Editable, withReact, ReactEditor, useFocused } from 'slate-react'
import { DefaultElement } from '../extended-ui/DefaultElement'
import { CodeBlock } from '../extended-ui/CodeBlock'
import { Options } from './Options'
import { Heading } from '../extended-ui/Heading'
import { Flex } from '@chakra-ui/layout'
import { useEmojiPicker } from '../../hooks/useEmojiPicker'
import { EmojiPicker } from '../emojis/EmojiPicker'
export const ContentEditor = () => {
  const { setShowEmojiPicker } = useEmojiPicker()
  const [showMarkdownOptions, setShowMarkdownOptions] = useState(false)
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Descendant[]>([
    {
      children: [{ text: 'A line of text' }],
    },
  ])
  const isFocused = useFocused()

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'code':
        return <CodeBlock {...props} />
      case 'heading':
        return <Heading {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  useEffect(() => {
    console.log('hm focused / not')
  }, [isFocused])
  console.log(
    editor.selection && ReactEditor.toDOMRange(editor, editor.selection).getBoundingClientRect()
  )
  const showOptions = () => {
    const selectedText = Editor.string(editor, editor.selection as Location)
    if (selectedText.length > 0) {
      setShowMarkdownOptions(true)
    } else {
      setShowMarkdownOptions(false)
    }
  }
  return (
    <>
      <Flex flex="1">
        <Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue)}>
          <EmojiPicker />
          {showMarkdownOptions && <Options editor={editor} value={value} />}
          <Editable renderElement={renderElement} onSelect={showOptions} />
        </Slate>
      </Flex>
    </>
  )
}
