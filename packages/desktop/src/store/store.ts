import { preview } from 'vite'
import create, { GetState, SetState } from 'zustand'
import { IPage } from '../interfaces'
interface StoreState {
  showEmojiPicker: boolean
  setShowEmojiPicker: (val: boolean) => void
  navigationKeyPressed: NavigationKey | null
  setNavigationKeyPressed: (val: NavigationKey | null) => void
  setActivePage: (val: IPage) => void
  activePage: IPage | null
}
type NavigationKey = 'ArrowRight' | 'ArrowLeft'

export const createEmojiPickerSlice = (set: SetState<StoreState>, get: GetState<StoreState>) => ({
  showEmojiPicker: false,
  setShowEmojiPicker: (val: boolean) => set((prev) => ({ ...prev, showEmojiPicker: val })),
})
export const isNavigatingSlice = (set: SetState<StoreState>, get: GetState<StoreState>) => ({
  navigationKeyPressed: '' as NavigationKey,
  setNavigationKeyPressed: (val: NavigationKey | null) =>
    set((prev) => ({ ...prev, navigationKeyPressed: val })),
})

export const activePageSlice = (set: SetState<StoreState>, get: GetState<StoreState>) => ({
  activePage: null,
  setActivePage: (val: IPage) =>
    set((prev) => ({
      ...prev,
      activePage: val,
    })),
})
export const useStore = create<StoreState>((set, get) => ({
  ...createEmojiPickerSlice(set, get),
  ...isNavigatingSlice(set, get),
  ...activePageSlice(set, get),
}))
