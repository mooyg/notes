import { Flex, FlexProps, Text, Button } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import axios from '../../axios/axios'
import { useLazyQuery } from '../../hooks/useLazyQuery'

import { GET_PAGE } from '../../queries'
import { useStore } from '../../store/store'
import { IDropdowns } from './Templates'

interface IPagesDropdown {
  dropdowns: IDropdowns
  clickedTemplate: string
}
const MotionFlex = motion<FlexProps>(Flex)

export const PagesDropdown = React.memo(({ dropdowns, clickedTemplate }: IPagesDropdown) => {
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
                    axios.get(`/pages/${item.id}`).then((result) => {
                      console.log(result)
                      setActivePage(result.data)
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
