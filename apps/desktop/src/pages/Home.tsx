/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Flex, Grid } from '@chakra-ui/react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { useAccessToken } from '../hooks/useAccessToken'
import { useInitialAuth } from '../hooks/useInitialAuth'
import { useHistory } from 'react-router-dom'
import { IPage, ITemplate } from '../interfaces'
import { Content } from '../components/content/Content'
import { EmojiPicker } from '../components/emojis/EmojiPicker'
import { useStore } from '../store/store'
import { LockedContent } from '../components/LockedContent'
import { Layout } from '../components/Layout'
export const Home = () => {
  const history = useHistory()
  const accessToken = useAccessToken()
  const { showEmojiPicker, activePage, canViewPage, setCanViewPage } = useStore()
  // const { data: pageContent } = useQuery<IPage>([`/user/page/${pageId}`, accessToken], {
  //   enabled: !!pageId,
  // })

  useEffect(() => {
    accessToken ? history.replace('/') : history.push('/login')
  }, [accessToken])

  useInitialAuth(accessToken!)

  useEffect(() => {
    if (activePage) {
      if (!activePage.locked) {
        setCanViewPage(activePage.id)
      }
    }
  }, [activePage])
  return (
    <>
      <Layout />
    </>
  )
}
