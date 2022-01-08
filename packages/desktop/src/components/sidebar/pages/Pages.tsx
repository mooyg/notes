import { useLazyQuery } from '@apollo/client'
import { Button, Flex, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { IPage } from '../../../interfaces'
import { GET_PAGE } from '../../../queries'
import { useStore } from '../../../store/store'
import { Emoji } from '../../emojis/Emoji'

type Page = {
  activeTemplateId: string
  pages: IPage[] | undefined
}

export const Pages = ({ activeTemplateId, pages }: Page) => {
  const [getPageById, { data: page }] = useLazyQuery<Record<'getPage', IPage>>(GET_PAGE)
  const setActivePage = useStore((state) => state.setActivePage)
  const getPage = (page: IPage) => {
    getPageById({
      variables: {
        pageId: page.id,
      },
    }).then((result) => {
      if (result.data) setActivePage(result.data.getPage)
    })
  }

  return (
    <Flex>
      {pages?.map((page) => {
        return (
          <Button onClick={() => getPage(page)} size={'sm'}>
            {page.name}
          </Button>
        )
      })}
    </Flex>
  )
}
