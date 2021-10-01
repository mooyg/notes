import {
  Plate,
  createPlateComponents,
  createPlateOptions,
  useStoreEditorState,
} from '@udecode/plate'
import { pluginsBasic } from './lib'
import { BallonToolbarMarks } from './Options'

export const ContentEditor = () => {
  const editor = useStoreEditorState()
  const editableProps = {
    placeholder: 'Type…',
    style: {
      padding: '15px',
    },
  }
  const components = createPlateComponents()
  const options = createPlateOptions()
  return (
    <>
      <BallonToolbarMarks />
      <Plate
        components={components}
        options={options}
        editableProps={editableProps}
        plugins={pluginsBasic}
      ></Plate>
    </>
  )
}
