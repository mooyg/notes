import untypedEmojiData, { IEmojiData } from 'emoji-datasource'
import { keyBy } from 'lodash'
import * as React from 'react'
import { Emoji } from './Emoji'
const EmojiData = (untypedEmojiData as Array<IEmojiData>).filter((emoji) => emoji.has_img_apple)

const EmojiDataByShortname = keyBy(EmojiData, 'short_name')

export const getEmojiData = (shortName: string) => {
  return EmojiDataByShortname[shortName]
}

export const getImagePath = (shortName: string) => {
  const { image } = getEmojiData(shortName) ?? {}
  if (!image) return null
  return image
}

export const emojiToImg = () => {
  return <Emoji shortName={`taco`} />
}
