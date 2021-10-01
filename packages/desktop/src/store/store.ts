import create from 'zustand'
interface StoreState {
  showEmojiPicker: boolean
  setShowEmojiPicker: (val: boolean) => void
}
export const useStore = create<StoreState>((set) => ({
  showEmojiPicker: false,
  setShowEmojiPicker: (val: boolean) => set((state) => ({ showEmojiPicker: val })),
}))
