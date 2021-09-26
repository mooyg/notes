import React from 'react'
import { Flex, Text, Tag } from '@chakra-ui/react'
import { IPage } from '../../interfaces'
import { UnFavoriteIcon } from '../icons/UnFavoriteIcon'
interface IHeader {
  page: IPage
}
export const Header = ({ page }: IHeader) => {
  return (
    <Flex flex="1" p="2" justify="space-between">
      <Tag fontWeight="medium" fontSize="sm">
        {page.name}
      </Tag>
      {page && <UnFavoriteIcon />}
    </Flex>
  )
}
