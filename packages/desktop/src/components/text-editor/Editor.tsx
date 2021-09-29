import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createEditor, Descendant, Editor, Location } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { DefaultElement } from '../extended-ui/DefaultElement'
import { CodeBlock } from '../extended-ui/CodeBlock'
import { Options } from './Options'
import { Heading } from '../extended-ui/Heading'
import { Flex } from '@chakra-ui/layout'
import { IPage } from '../../interfaces'

interface IContentEditor {
  content: IPage
}
export const ContentEditor = () => {
  const editorRef = useRef<any | null>(null)
  const [showMarkdownOptions, setShowMarkdownOptions] = useState(false)
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Descendant[]>([
    {
      children: [{ text: 'A line of text' }],
    },
  ])
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
  const showOptions = () => {
    console.log(editor.selection)
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
          {showMarkdownOptions && <Options editor={editor} value={value} />}
          <Editable renderElement={renderElement} onSelect={showOptions} />
        </Slate>
      </Flex>
    </>
  )
}
