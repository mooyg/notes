/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { Flex, Grid } from '@chakra-ui/react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { useAccessToken } from '../hooks/useAccessToken'
import { useInitialAuth } from '../hooks/useInitialAuth'
import { useHistory } from 'react-router'
import { usePage } from '../hooks/usePage'
import { useQuery } from 'react-query'
import { IPage } from '../interfaces'
import { Content } from '../components/content/Content'
import { EmojiPicker } from '../components/emojis/EmojiPicker'
import { useEmojiPicker } from '../hooks/useEmojiPicker'
export const Home = () => {
  const history = useHistory()
  const accessToken = useAccessToken()
  const { pageId } = usePage()
  const { showEmojiPicker } = useEmojiPicker()
  const { data: pageContent } = useQuery<IPage>([`/user/page/${pageId}`, accessToken], {
    enabled: !!pageId,
  })
  useEffect(() => {
    accessToken ? history.replace('/') : history.push('/login')
  }, [accessToken])

  useInitialAuth(accessToken!)
  return (
    <>
      <Flex alignItems="flex-start">
        <Sidebar />
        {pageContent && <Content content={pageContent} />}
      </Flex>
    </>
  )
}
