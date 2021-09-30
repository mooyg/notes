import { createHistoryPlugin, createReactPlugin, HeadingToolbar, Plate } from '@udecode/plate'
import { createBasicElementPlugins } from '@udecode/plate-basic-elements'
import { ToolbarButtonsBasicElements } from './Options'

export const ContentEditor = () => {
  const editableProps = {
    placeholder: 'Type…',
    style: {
      padding: '15px',
    },
  }
  const plugins = [createReactPlugin(), createHistoryPlugin(), ...createBasicElementPlugins()]
  return (
    <>
      <HeadingToolbar>
        <ToolbarButtonsBasicElements />
        <HeadingToolbar />
      </HeadingToolbar>
      <Plate plugins={plugins} editableProps={editableProps} />
    </>
  )
}
