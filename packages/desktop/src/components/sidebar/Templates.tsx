import { Flex, Text, IconButton } from '@chakra-ui/react'
import { AxiosResponse } from 'axios'
import { useRef, useState } from 'react'
import { useMutation, UseMutationResult, useQuery, useQueryClient } from 'react-query'
import axios from '../../axios/axios'
import { useAccessToken } from '../../hooks/useAccessToken'
import { IPage, ITemplate } from '../../interfaces'
import { Emoji } from '../emojis/Emoji'
import { ArrowIcon } from '../icons/ArrowIcon'
import { DownArrowIcon } from '../icons/DownArrowIcon'
import { Modal } from '../modal/Modal'

export const Templates = () => {
  const accessToken = useAccessToken()
  const queryClient = useQueryClient()
  const templateIdRef = useRef<string | null>(null)
  const [showPages, setShowPages] = useState(false)
  const { data: templates } = useQuery<ITemplate[]>(['/user/templates', accessToken])

  const { data: templatePages } = useQuery<IPage[]>(
    [`/user/pages/${templateIdRef.current}`, accessToken],
    {
      enabled: templateIdRef.current ? true : false,
    }
  )

  const templateMutation: UseMutationResult = useMutation(
    (newTemplate) =>
      axios.post('/user/template/create', newTemplate, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    {
      onSuccess: (data) => {
        queryClient.setQueryData(['/user/templates', accessToken], (prev) => {
          return [...(prev as ITemplate[]), (data as AxiosResponse).data]
        })
      },
    }
  )

  const pagesMutation: UseMutationResult = useMutation((payload) =>
    axios.post(
      `/user/pages/create/${(payload as IPayload).templateId}`,
      {
        pageName: (payload as IPayload).pageName,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
  )
  return (
    <Flex p="16px" flexDir="column">
      <Flex minW="full" justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold">Notes</Text>
        <Modal
          heading="Template"
          onSumbit={({ name }) => {
            templateMutation.mutate({
              templateName: name,
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
                    <IconButton
                      variant="ghost"
                      aria-label="DropDown"
                      icon={showPages ? <DownArrowIcon /> : <ArrowIcon />}
                      onClick={() => {
                        templateIdRef.current = el.id
                        setShowPages((prev) => !prev)
                      }}
                    />
                    <Emoji shortName="closed_book" />
                    {el.name}
                    <Modal
                      heading="Page"
                      onSumbit={({ name }) => {
                        pagesMutation.mutate({
                          pageName: name,
                          templateId: el.id,
                        })
                      }}
                    />
                  </Flex>
                  {showPages &&
                    templatePages?.map((item) => (
                      <>{el.id === item.templateId && <Text>{item.name}</Text>}</>
                    ))}
                </Text>
              </Flex>
            </>
          )
        })}
      </Flex>
    </Flex>
  )
}

interface IPayload {
  pageName: string
  templateId: string
}
