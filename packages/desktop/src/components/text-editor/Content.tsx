import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { createEditor, Descendant, Editor, Location } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { DefaultElement } from '../extended-ui/DefaultElement'
import { CodeBlock } from '../extended-ui/CodeBlock'
import { Options } from './Options'
export const Content = () => {
  const [showMarkdownOptions, setShowMarkdownOptions] = useState(false)
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Descendant[]>([
    {
      type: 'heading',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'code':
        return <CodeBlock {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])
  const showOptions = () => {
    const selectedText = Editor.string(editor, editor.selection as Location)
    if (selectedText.length > 0) {
      setShowMarkdownOptions(true)
    } else {
      setShowMarkdownOptions(false)
    }
  }
  return (
    <Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue)}>
      <Editable renderElement={renderElement} onSelect={showOptions} />
      {showMarkdownOptions && <Options editor={editor} location={editor.selection} />}
    </Slate>
  )
}
