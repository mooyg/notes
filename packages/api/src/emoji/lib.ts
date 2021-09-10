import untypedEmojiData, { IEmojiData } from 'emoji-datasource'
import { keyBy } from 'lodash'

const EmojiData = (untypedEmojiData as Array<IEmojiData>).filter((emoji) => emoji.has_img_apple)

const EmojiDataByShortname = keyBy(EmojiData, 'short_name')

export const getEmojiData = (shortName: string) => {
  return EmojiDataByShortname[shortName]
}

export const getImagePath = (shortName: string) => {
  const { image } = getEmojiData(shortName)
  console.log(image)
  return image
}
