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
  useToast,
  Button,
  IconButton,
} from '@chakra-ui/react'
import React, { ReactNode, useState } from 'react'

import { AddIcon } from '../icons'
interface IModal {
  heading: string
  body?: string[]
  onSumbit: (args: SumbitInterface) => void
  children: ReactNode
}
interface SumbitInterface {
  name: string
}
export const Modal = ({ heading, children, onSumbit }: IModal) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [name, setName] = useState('')
  const toast = useToast()

  return (
    <>
      {children}
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ChakraModalOverlay />
        <ChakraModalContent>
          <ChakraModalHeader>Create {heading}</ChakraModalHeader>
          <ChakraModalCloseButton />
          <ChakraModalBody>
            <VStack>
              <FormControl id="Name">
                <FormLabel>Name of the {heading}</FormLabel>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  placeholder={`Name of the ${heading}`}
                />
              </FormControl>
              <FormControl id="Description">
                <FormLabel>Description</FormLabel>
                <Input placeholder="Description " />
              </FormControl>
              {heading.toLowerCase() === 'template' ? (
                <FormControl id="header">
                  <FormLabel>Header</FormLabel>
                  <Input placeholder="Header URL" />
                </FormControl>
              ) : null}
            </VStack>
          </ChakraModalBody>
          <ChakraModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="green"
              onClick={() => {
                if (name?.trim()?.length === 0)
                  return toast({
                    title: 'Cannot Sumbit empty name',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
                if (name) {
                  onSumbit({ name: name })
                  onClose()
                }
              }}
            >
              Sumbit
            </Button>
          </ChakraModalFooter>
        </ChakraModalContent>
      </ChakraModal>
    </>
  )
}
