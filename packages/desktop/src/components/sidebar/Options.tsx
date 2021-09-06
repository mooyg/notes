import React from 'react'
import { VStack, HStack, Text, IconButton } from '@chakra-ui/react'
import { FavoriteIcon, SearchIcon, SettingsIcon } from '../icons/index'
export const Options = (): JSX.Element => {
  return (
    <VStack mt="5" alignItems="flex-start">
      <HStack>
        <IconButton aria-label="quick-find" icon={<SearchIcon />} />
        <Text fontWeight="bold">Quick Find</Text>
      </HStack>
      <HStack>
        <IconButton aria-label="favorites" icon={<FavoriteIcon />} />
        <Text>Favorites</Text>
      </HStack>
      <HStack>
        <IconButton aria-label="settings" icon={<SettingsIcon />} />
        <Text>Settings</Text>
      </HStack>
    </VStack>
  )
}
