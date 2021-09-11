import { Button, IconButton } from '@chakra-ui/button'
import {
  useDisclosure,
  Modal as ChakraModal,
  ModalOverlay as ChakraModalOverlay,
  ModalContent as ChakraModalContent,
  ModalHeader as ChakraModalHeader,
  ModalCloseButton as ChakraModalCloseButton,
  ModalBody as ChakraModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter as ChakraModalFooter,
  VStack,
} from '@chakra-ui/react'
import React from 'react'

import { AddIcon } from '../icons'
interface IModal {
  heading: string
  body?: string[]
}
export const Modal = ({ heading, body }: IModal) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton onClick={onOpen} variant="ghost" aria-label="add-icon" icon={<AddIcon />} />
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ChakraModalOverlay />
        <ChakraModalContent>
          <ChakraModalHeader>Create {heading}</ChakraModalHeader>
          <ChakraModalCloseButton />
          <ChakraModalBody>
            <VStack>
              <FormControl id="Name">
                <FormLabel>Name of the {heading}</FormLabel>
                <Input placeholder={`Name of the ${heading}`} />
              </FormControl>
              <FormControl id="Description">
                <FormLabel>Description</FormLabel>
                <Input placeholder="Description " />
              </FormControl>
              <FormControl id="header">
                <FormLabel>Header</FormLabel>
                <Input placeholder="Header URL" />
              </FormControl>
            </VStack>
          </ChakraModalBody>
          <ChakraModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green">Sumbit</Button>
          </ChakraModalFooter>
        </ChakraModalContent>
      </ChakraModal>
    </>
  )
}
