import { Box } from '@chakra-ui/react'
import React from 'react'
import { Emoji } from './Emoji'
type IEmojiRenderer = {
  children: React.ReactElement
}
export const EmojiRenderer = ({ children }: IEmojiRenderer): JSX.Element => {
  const parseEmojis = (value: any) => {
    return children.props.children.split(' ').map((node: string) => {
      if (node.match(/(^|\s)+:([^\s\n\r])+:|^:[^\s\n\r]+/gm)) {
        console.log('JUST NODE', node)
        return <Emoji shortName={node.substring(1, node.length - 1)} />
      } else {
        return node
      }
    })
  }
  const text = 'HelloWorld :closed_book:'
  console.log(parseEmojis(text))
  return (
    <>
      {parseEmojis(text).map((el: any, index: number) => {
        console.log(el)
        return <React.Fragment key={index}>{el} </React.Fragment>
      })}
    </>
  )
}
