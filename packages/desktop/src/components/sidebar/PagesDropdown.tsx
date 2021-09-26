import { Button } from '@chakra-ui/button'
import { Flex, FlexProps, Text } from '@chakra-ui/layout'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { usePage } from '../../hooks/usePage'
import { IPage } from '../../interfaces'
import { ExtendedITemplate } from './Templates'

interface IPagesDropdown {
  templatePages: IPage[] | undefined
  el: ExtendedITemplate
}
export const PagesDropdown = React.memo(({ templatePages, el }: IPagesDropdown) => {
  const MotionFlex = motion<FlexProps>(Flex)
  const { setPageId } = usePage()
  return (
    <AnimatePresence>
      {templatePages
        ?.filter((item) => el.isActive && item.templateId === el.id)
        .map((item) => {
          return (
            <MotionFlex
              initial={{ x: 0.2, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -0.4, opacity: 0 }}
              dir="column"
              key={item.id}
            >
              <Button variant="ghost" mb="2" onClick={() => setPageId(item.id)}>
                <Text fontSize="xs">{item.name}</Text>
              </Button>
            </MotionFlex>
          )
        })}
    </AnimatePresence>
  )
})
