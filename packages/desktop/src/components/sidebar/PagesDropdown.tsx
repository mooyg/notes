import { Button } from '@chakra-ui/button'
import { Flex, FlexProps, Text } from '@chakra-ui/layout'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useLazyQuery } from '../../hooks/useLazyQuery'

import { GET_PAGE } from '../../queries'
import { useStore } from '../../store/store'
import { IDropdowns } from './Templates'

interface IPagesDropdown {
  dropdowns: IDropdowns
  clickedTemplate: string
}

export const PagesDropdown = React.memo(({ dropdowns, clickedTemplate }: IPagesDropdown) => {
  const MotionFlex = motion<FlexProps>(Flex)
  const setActivePage = useStore((state) => state.setActivePage)
  const [, getPage] = useLazyQuery({
    query: GET_PAGE,
  })
  return (
    <AnimatePresence>
      {dropdowns.activeDropdownId === clickedTemplate &&
        dropdowns.dropdowns
          .find((template) => template.templateId === clickedTemplate)
          ?.templatePages?.map((item) => {
            return (
              <MotionFlex
                initial={{ x: 0.2, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -0.4, opacity: 0 }}
                dir="column"
                key={item.id}
              >
                <Button
                  variant="ghost"
                  mb="2"
                  onClick={() =>
                    getPage({
                      pageId: item.id,
                    })?.then((result) => {
                      setActivePage(result.data.getPage)
                    })
                  }
                >
                  <Text fontSize="xs">{item.name}</Text>
                </Button>
              </MotionFlex>
            )
          })}
    </AnimatePresence>
  )
})
