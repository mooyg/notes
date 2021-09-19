import { Flex, Text, IconButton, Button, VStack } from '@chakra-ui/react'
import { AxiosResponse } from 'axios'
import React, { useEffect, useRef, useState } from 'react'
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
  const [templateId, setTemplateId] = useState<string | null>(null)
  const [showPages, setShowPages] = useState(false)
  const [templatePages, setTemplatePages] = useState<IPage[] | null>()
  const { data: templates } = useQuery<ITemplate[]>(['/user/templates', accessToken])
  const { data } = useQuery<IPage[]>([`/user/pages/${templateId}`, accessToken], {
    enabled: !!templateId,
  })

  useEffect(() => {
    if (data) {
      console.log('HEY')
      setTemplatePages((prev) => {
        if (!prev) return data
        return [...prev, ...data]
      })
    }
  }, [data])
  console.log(templatePages)
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
            <React.Fragment key={el.id}>
              <Flex minW="full" justifyContent="space-between" alignItems="center">
                <Text fontWeight="bold" fontSize="sm">
                  <Flex justifyItems="center" alignItems="center">
                    <IconButton
                      variant="ghost"
                      aria-label="DropDown"
                      icon={showPages ? <DownArrowIcon /> : <ArrowIcon />}
                      onClick={() => {
                        console.log(el.id)
                        setTemplateId(el.id)
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

                  {templatePages
                    ?.filter((item) => item.templateId === el.id)
                    .map((item) => {
                      return (
                        <React.Fragment key={item.id}>
                          {
                            <Button variant="ghost" mb="2">
                              <Text fontSize="xs">{item.name}</Text>
                            </Button>
                          }
                        </React.Fragment>
                      )
                    })}
                </Text>
              </Flex>
            </React.Fragment>
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
