import {
  createReactPlugin,
  createHistoryPlugin,
  createParagraphPlugin,
  createBlockquotePlugin,
  createCodeBlockPlugin,
  createHeadingPlugin,
  createBoldPlugin,
  createItalicPlugin,
  createUnderlinePlugin,
  createStrikethroughPlugin,
  createCodePlugin,
  PlatePlugin,
  ELEMENT_IMAGE,
  getRenderElement,
  createSelectOnBackspacePlugin,
  getPlatePluginTypes,
  SPEditor,
  insertNodes,
  TElement,
  getPlatePluginType,
} from '@udecode/plate'
import { createKbdPlugin } from '@udecode/plate-kbd'
import { getImagePath } from '../emojis/lib'

export const createImagePlugin = (): PlatePlugin => {
  return {
    pluginKeys: ELEMENT_IMAGE,
    renderElement: getRenderElement(ELEMENT_IMAGE),
    voidTypes: getPlatePluginTypes(ELEMENT_IMAGE),
    inlineTypes: getPlatePluginTypes(ELEMENT_IMAGE),
  }
}

export const pluginsBasic = [
  createReactPlugin(),
  createHistoryPlugin(),
  createParagraphPlugin(),
  createBlockquotePlugin(),
  createCodeBlockPlugin(),
  createHeadingPlugin(),
  createBoldPlugin(),
  createItalicPlugin(),
  createUnderlinePlugin(),
  createStrikethroughPlugin(),
  createCodePlugin(),
  createKbdPlugin(),
  createImagePlugin(),
]

export const insertImage = (editor: SPEditor | undefined, shortName: string) => {
  const imageId = getImagePath(shortName.toLowerCase())
  const image = {
    type: getPlatePluginType(editor, ELEMENT_IMAGE),
    src: `http://localhost:8080/emoji/${imageId}`,
    children: [{ text: '' }],
    shortName,
  }
  editor && insertNodes<TElement>(editor, image)
}
