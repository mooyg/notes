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
  ELEMENT_PARAGRAPH,
} from '@udecode/plate'

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
]

export const createElement = (
  text = '',
  { type = ELEMENT_PARAGRAPH, mark }: { type?: string; mark?: string } = {}
) => {
  const leaf = { text }
  if (mark) {
    //@ts-ignore
    leaf[mark] = true
  }

  return {
    type,
    children: [leaf],
  }
}
