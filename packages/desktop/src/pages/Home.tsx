/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Flex, Grid } from '@chakra-ui/react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { useAccessToken } from '../hooks/useAccessToken'
import { useInitialAuth } from '../hooks/useInitialAuth'
import { useHistory } from 'react-router'
import { IPage, ITemplate } from '../interfaces'
import { Content } from '../components/content/Content'
import { EmojiPicker } from '../components/emojis/EmojiPicker'
import { useStore } from '../store/store'
import { useQuery } from 'urql'
import { GET_PAGE, GET_TEMPLATES } from '../queries'
import { useLazyQuery } from '../hooks/useLazyQuery'
export const Home = () => {
  const history = useHistory()
  const accessToken = useAccessToken()
  const { showEmojiPicker, activePage } = useStore()
  const store = useStore()
  // const { data: pageContent } = useQuery<IPage>([`/user/page/${pageId}`, accessToken], {
  //   enabled: !!pageId,
  // })

  useEffect(() => {
    accessToken ? history.replace('/') : history.push('/login')
  }, [accessToken])

  useInitialAuth(accessToken!)

  return (
    <>
      <Flex alignItems="flex-start">
        <Sidebar />
        {activePage && <Content content={activePage} />}
      </Flex>
      {showEmojiPicker && <EmojiPicker />}
    </>
  )
}
