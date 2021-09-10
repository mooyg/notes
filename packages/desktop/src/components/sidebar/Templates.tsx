import { Flex, Text, IconButton, Box } from '@chakra-ui/react'
import { Emoji } from '../emojis/Emoji'
import { AddIcon } from '../icons'
export const Templates = () => {
  return (
    <Flex p="16px" alignItems="center">
      <Emoji shortName="closed_book" />
      <Flex minW="full" justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold">Notes</Text>
        <IconButton variant="ghost" aria-label="add-icon" icon={<AddIcon />} />
      </Flex>
    </Flex>
  )
}
