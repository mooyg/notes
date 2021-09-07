import { Flex, Text, Button, IconButton } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { AddIcon } from '../icons'
export const Templates = () => {
  useEffect(() => {}, [])
  return (
    <Flex>
      <Flex p="16px" minW="full" justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold">Notes</Text>
        <IconButton
          justifyContent="center"
          alignItems="center"
          variant="ghost"
          aria-label="add-icon"
          icon={<AddIcon />}
        />
      </Flex>
    </Flex>
  )
}
