import { Flex, Text } from '@chakra-ui/react'
import { IPage } from '../../../interfaces'

type Page = {
  activeTemplateId: string
  pages: IPage[] | undefined
}

export const Pages = ({ activeTemplateId, pages }: Page) => {
  return (
    <Flex>
      {pages?.map((page) => {
        return (
          <>
            <Text>{page.name}</Text>
          </>
        )
      })}
    </Flex>
  )
}
