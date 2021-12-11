import React from 'react'
import { Flex, Text, Tag } from '@chakra-ui/react'
import { IPage } from '../../interfaces'
import { UnFavoriteIcon } from '../icons/UnFavoriteIcon'
import { useStore } from '../../store/store'
interface IHeader {
  page: IPage
}
export const Header = () => {
  const page = useStore((state) => state.activePage)
  return (
    <Flex flex="1" p="2" justify="space-between">
      <Tag fontWeight="medium" fontSize="sm">
        {page?.name}
      </Tag>
      {page && <UnFavoriteIcon />}
    </Flex>
  )
}
