import React from 'react'
import { VStack, HStack, Text, IconButton } from '@chakra-ui/react'
import { FavoriteIcon, SearchIcon, SettingsIcon } from '../icons/index'
export const Options = (): JSX.Element => {
  return (
    <VStack mt="5" alignItems="flex-start">
      <IconButton variant="ghost" isRound={true} aria-label="quick-find" leftIcon={<SearchIcon />}>
        <Text fontWeight="bold">Quick Find</Text>
      </IconButton>
      <IconButton variant="ghost" aria-label="favorites" leftIcon={<FavoriteIcon />}>
        <Text>Favorites</Text>
      </IconButton>
      <IconButton variant="ghost" aria-label="settings" leftIcon={<SettingsIcon />}>
        <Text>Settings</Text>
      </IconButton>
    </VStack>
  )
}
