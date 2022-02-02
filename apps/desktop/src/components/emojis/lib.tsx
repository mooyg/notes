import untypedEmojiData, { IEmojiData } from 'emoji-datasource'
import { groupBy, keyBy } from 'lodash'
import * as React from 'react'
import { Emoji } from './Emoji'
export const EmojiData = (untypedEmojiData as Array<IEmojiData>).filter(
  (emoji) => emoji.has_img_apple
)
export const groupedEmojiData = groupBy(EmojiData, 'category')
export const EmojiDataByShortname = keyBy(EmojiData, 'short_name')

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
