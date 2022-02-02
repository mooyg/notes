import React, { useCallback, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from '../axios/axios'
import { Content } from '../components/content/Content'
import { EmojiPicker } from '../components/emojis/EmojiPicker'
import { Layout } from '../components/Layout'
import { LockedContent } from '../components/LockedContent'
import { useAccessToken } from '../hooks/useAccessToken'
import { useInitialAuth } from '../hooks/useInitialAuth'
import { IPage } from '../interfaces'
import { useStore } from '../store/store'

export const Page = () => {
  const { activePage, showEmojiPicker, setActivePage } = useStore()
  const history = useHistory()
  const { pageId } = useParams<{
    pageId: string
  }>()

  const accessToken = useAccessToken()

  useInitialAuth(accessToken!)
  useEffect(() => {
    !accessToken && history.push('/login')
  }, [accessToken])
  useEffect(() => {
    console.log('RUNNING THHIS USEEFFECT')
    ;(async () => {
      await axios.get<IPage>(`/pages/${pageId}`).then((result) => {
        setActivePage(result.data)
      })
    })()
  }, [pageId])
  return (
    <>
      <Layout>{activePage?.locked ? <LockedContent /> : <Content />}</Layout>
      {showEmojiPicker && <EmojiPicker />}
    </>
  )
}
