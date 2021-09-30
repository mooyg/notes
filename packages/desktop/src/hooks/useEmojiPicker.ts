import { useContext } from 'react'
import {
  EmojiPickerContext,
  IEmojiPickerContext,
} from '../components/providers/EmojiPicker.provider'

export const useEmojiPicker = (): IEmojiPickerContext => {
  const emojiContext = useContext(EmojiPickerContext)
  if (!emojiContext) {
    throw Error('No Page Context')
  }
  return emojiContext
}
