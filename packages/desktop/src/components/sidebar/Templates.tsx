import { Flex, Text } from '@chakra-ui/react'
import axios, { fetcher } from '../../axios/axios'
import { ITemplate } from '../../interfaces'
import { Emoji } from '../emojis/Emoji'
import { Modal } from '../modal/Modal'
import useSWR, { useSWRConfig } from 'swr'

export const Templates = () => {
  const { mutate } = useSWRConfig()

  const { data: templates } = useSWR('/user/templates', fetcher)

  return (
    <Flex p="16px" flexDir="column">
      <Flex minW="full" justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold">Notes</Text>
        <Modal
          heading="Template"
          onSumbit={({ name }) => {
            console.log('WHEN SUMBITTING TEMPLATE', name)
            axios
              .post('user/template/create', {
                templateName: name,
              })
              .then(() => {
                mutate('/user/templates')
              })
          }}
        />
      </Flex>
      <Flex justifyItems="center" flexDir="column">
        {templates?.map((el: ITemplate) => {
          return (
            <>
              <Flex minW="full" justifyContent="space-between" alignItems="center">
                <Text fontWeight="bold" fontSize="sm">
                  <Flex justifyItems="center" alignItems="center">
                    <Emoji shortName="closed_book" />
                    {el.name}
                  </Flex>
                </Text>
                <Modal
                  heading="Page"
                  onSumbit={({ name }) => {
                    axios.post(`/user/pages/create/${el.id}`, {
                      pageName: name,
                    })
                  }}
                />
              </Flex>
            </>
          )
        })}
      </Flex>
    </Flex>
  )
}
