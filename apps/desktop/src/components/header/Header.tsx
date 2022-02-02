import React from 'react'
import { Flex, Text, Tag, HStack, IconButton } from '@chakra-ui/react'
import { IPage } from '../../interfaces'
import { UnFavoriteIcon } from '../icons/UnFavoriteIcon'
import { useStore } from '../../store/store'
import { LockOpenIcon } from '../icons/LockOpenIcon'
import { LockClosedIcon } from '../icons/LockClosedIcon'
interface IHeader {
  page: IPage
}
export const Header = () => {
  const page = useStore((state) => state.activePage)
  return (
    <Flex p="2" justify="space-between">
      <Tag fontWeight="medium" fontSize="sm">
        {page?.name}
      </Tag>
      <HStack>
        {!page?.locked ? (
          <IconButton aria-label="open-lock-icon">
            <LockOpenIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="closed-lock-icon">
            <LockClosedIcon />
          </IconButton>
        )}
        <UnFavoriteIcon />
      </HStack>
    </Flex>
  )
}
