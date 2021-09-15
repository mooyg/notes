import { Flex, Text } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import axios from '../../axios/axios'
import { useAccessToken } from '../../hooks/useAccessToken'
import { ITemplate } from '../../interfaces'
import { Emoji } from '../emojis/Emoji'
import { Modal } from '../modal/Modal'

export const Templates = () => {
  const accessToken = useAccessToken()
  const { data: templates } = useQuery<any>(['/user/templates', accessToken])
  return (
    <Flex p="16px" flexDir="column">
      <Flex minW="full" justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold">Notes</Text>
        <Modal
          heading="Template"
          onSumbit={({ name }) => {
            axios
              .post('user/template/create', {
                templateName: name,
              })
              .then(() => {})
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
                    axios({
                      method: 'POST',
                      url: `/user/pages/create/${el.id}`,
                      data: {
                        pageName: name,
                      },
                      headers: {
                        Authorization: `Bearer ${accessToken}`,
                      },
                    }).then(() => {})
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
