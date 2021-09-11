import { Flex, Text, IconButton, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from '../../axios/axios'
import { ITemplate } from '../../interfaces'
import { Emoji } from '../emojis/Emoji'
import { AddIcon } from '../icons'

export const Templates = () => {
  const [templates, setTemplates] = useState([])
  useEffect(() => {
    axios.get('/user/templates').then((res) => {
      console.log(res)
      setTemplates(res.data)
    })
  }, [])
  const createTemplate = () => {
    axios.post('user/template/create', {
      templateName: 'Blog',
    })
  }
  return (
    <Flex p="16px" flexDir="column">
      <Flex minW="full" justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold">Notes</Text>
        <IconButton
          variant="ghost"
          aria-label="add-icon"
          icon={<AddIcon />}
          onClick={createTemplate}
        />
      </Flex>
      <Flex justifyItems="center" flexDir="column">
        {templates.map((el: ITemplate) => {
          return (
            <>
              <Flex minW="full" justifyContent="space-between" alignItems="center">
                <Text fontWeight="bold" fontSize="sm">
                  <Flex justifyItems="center" alignItems="center">
                    <Emoji shortName="closed_book" />
                    {el.name}
                  </Flex>
                </Text>
                <IconButton variant="ghost" aria-label="add-icon" icon={<AddIcon />} />
              </Flex>
            </>
          )
        })}
      </Flex>
    </Flex>
  )
}
