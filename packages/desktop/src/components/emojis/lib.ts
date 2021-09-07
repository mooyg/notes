import untypedEmojiData from 'emoji-datasource'

export type EmojiSkinVariation = {
  unified: string
  non_qualified: null
  image: string
  sheet_x: number
  sheet_y: number
  added_in: string
  has_img_apple: boolean
  has_img_google: boolean
  has_img_twitter: boolean
  has_img_emojione: boolean
  has_img_facebook: boolean
  has_img_messenger: boolean
}
export interface IEmojiData {
  name: string
  unified: string
  non_qualified: string | null
  docomo: string | null
  au: string | null
  softbank: string | null
  google: string | null
  image: string
  sheet_x: number
  sheet_y: number
  short_name: string
  short_names: Array<string>
  text: string | null
  texts: Array<string> | null
  category: string
  sort_order: number
  added_in: string
  has_img_apple: boolean
  has_img_google: boolean
  has_img_twitter: boolean
  has_img_emojione: boolean
  has_img_facebook: boolean
  has_img_messenger: boolean
  skin_variations?: {
    [key: string]: EmojiSkinVariation
  }
}

const EmojiData = (untypedEmojiData as Array<IEmojiData>).filter((emoji) => emoji.has_img_apple)
