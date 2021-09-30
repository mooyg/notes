import { createContext, useMemo, useState } from 'react'

export interface IEmojiPickerContext {
  showEmojiPicker: boolean | null | undefined
  setShowEmojiPicker: React.Dispatch<React.SetStateAction<boolean | null | undefined>>
}
export const EmojiPickerContext = createContext<IEmojiPickerContext | null>(null)
export const EmojiPickerProvider = ({ children }: Record<'children', React.ReactNode>) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean | null>()
  const contextValue = useMemo(
    () => ({
      showEmojiPicker,
      setShowEmojiPicker,
    }),
    [showEmojiPicker]
  )
  return <EmojiPickerContext.Provider value={contextValue}>{children}</EmojiPickerContext.Provider>
}
