import React from 'react'
import { VStack, HStack, Text, Button } from '@chakra-ui/react'
import { FavoriteIcon, SearchIcon, SettingsIcon } from '../icons'
export const Options = (): JSX.Element => {
  return (
    <VStack mt="5" alignItems="flex-start">
      <Button variant="ghost" aria-label="quick-find" leftIcon={<SearchIcon />}>
        <Text>Quick Find</Text>
      </Button>
      <Button variant="ghost" aria-label="favorites" leftIcon={<FavoriteIcon />}>
        <Text>Favorites</Text>
      </Button>
      <Button variant="ghost" aria-label="settings" leftIcon={<SettingsIcon />}>
        <Text>Settings</Text>
      </Button>
    </VStack>
  )
}
