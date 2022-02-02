import React from 'react'
import { Content } from '../components/content/Content'
import { EmojiPicker } from '../components/emojis/EmojiPicker'
import { Layout } from '../components/Layout'
import { LockedContent } from '../components/LockedContent'
import { useStore } from '../store/store'

export const Page = () => {
  const { activePage, showEmojiPicker } = useStore()
  return (
    <>
      <Layout>{activePage?.locked ? <LockedContent /> : <Content />}</Layout>
      {showEmojiPicker && <EmojiPicker />}
    </>
  )
}
