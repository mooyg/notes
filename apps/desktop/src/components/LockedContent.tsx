import { useLazyQuery } from '@apollo/client'
import { Box, Center, Container, Flex, HStack, PinInput, PinInputField } from '@chakra-ui/react'
import { useEffect } from 'react'
import { VERIFY_PAGE_PASSWORD } from '../queries'
import { useStore } from '../store/store'

export const LockedContent = () => {
  const [verifyPagePassword, { data: verification }] =
    useLazyQuery<Record<'verifyPagePassword', boolean>>(VERIFY_PAGE_PASSWORD)
  const { activePage, updateLockedState } = useStore()

  useEffect(() => {
    if (verification) {
      if (verification?.verifyPagePassword) {
        updateLockedState()
      }
    }
  }, [verification])

  return (
    <>
      <Container maxW="container.xl0">
        <Center>
          <HStack>
            <PinInput
              onComplete={(e) =>
                verifyPagePassword({
                  variables: {
                    pageId: activePage?.id,
                    password: e,
                  },
                })
              }
              type="number"
              mask
              size={'lg'}
            >
              <PinInputField bgColor={'green.200'} />
              <PinInputField bgColor={'green.200'} />
              <PinInputField bgColor={'green.200'} />
              <PinInputField bgColor={'green.200'} />
            </PinInput>
          </HStack>
        </Center>
      </Container>
    </>
  )
}
