import { Flex, Text, IconButton, Heading } from '@chakra-ui/react'
import { Emoji } from '../emojis/Emoji'
import { EmojiRenderer } from '../emojis/EmojiRenderer'
import { AddIcon } from '../icons'
export const Templates = () => {
  return (
    <Flex p="16px" flexDir="column">
      <Flex minW="full" justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold">Notes</Text>
        <IconButton variant="ghost" aria-label="add-icon" icon={<AddIcon />} />
      </Flex>
      <Flex justifyItems="center">
        <Emoji shortName="closed_book" />
        <EmojiRenderer>
          <Text fontWeight="semibold">
            :closed_book: This is a closed book:book:This is just a book
          </Text>
        </EmojiRenderer>
      </Flex>
    </Flex>
  )
}
