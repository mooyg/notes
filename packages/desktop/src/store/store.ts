import create, { GetState, SetState } from 'zustand'
interface StoreState {
  showEmojiPicker: boolean
  setShowEmojiPicker: (val: boolean) => void
  navigationKeyPressed: NavigationKey
  setNavigationKeyPressed: (val: NavigationKey) => void
}
type NavigationKey = 'ArrowRight' | 'ArrowLeft'
export const createEmojiPickerSlice = (set: SetState<StoreState>, get: GetState<StoreState>) => ({
  showEmojiPicker: false,
  setShowEmojiPicker: (val: boolean) => set(() => ({ showEmojiPicker: val })),
})
export const isNavigatingSlice = (set: SetState<StoreState>, get: GetState<StoreState>) => ({
  navigationKeyPressed: '' as NavigationKey,
  setNavigationKeyPressed: (val: NavigationKey) =>
    set((prev) => ({ ...prev, navigationKeyPressed: val })),
})
export const useStore = create<StoreState>((set, get) => ({
  ...createEmojiPickerSlice(set, get),
  ...isNavigatingSlice(set, get),
}))
