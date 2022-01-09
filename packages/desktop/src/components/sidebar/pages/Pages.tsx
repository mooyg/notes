import { useLazyQuery } from '@apollo/client'
import { Button, Flex, Text } from '@chakra-ui/react'
import { useCallback, useEffect } from 'react'
import axios from '../../../axios/axios'
import { IPage } from '../../../interfaces'
import { GET_PAGE } from '../../../queries'
import { useStore } from '../../../store/store'

type Page = {
  activeTemplateId: string
  pages: IPage[] | undefined
}

export const Pages = ({ activeTemplateId, pages }: Page) => {
  const setActivePage = useStore((state) => state.setActivePage)
  const getPage = useCallback(async (page: IPage) => {
    console.log(page.id)
    await axios.get<IPage>(`/pages/${page.id}`).then((result) => {
      setActivePage(result.data)
    })
  }, [])

  return (
    <Flex>
      {pages?.map((page) => {
        return (
          <Button key={page.id} onClick={() => getPage(page)} size={'sm'}>
            {page.name}
          </Button>
        )
      })}
    </Flex>
  )
}
