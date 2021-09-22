import { Flex, Text, IconButton, Button, VStack } from '@chakra-ui/react'
import { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { useMutation, UseMutationResult, useQuery, useQueryClient } from 'react-query'
import axios from '../../axios/axios'
import { useAccessToken } from '../../hooks/useAccessToken'
import { IPage, ITemplate } from '../../interfaces'
import { Emoji } from '../emojis/Emoji'
import { ArrowIcon } from '../icons/ArrowIcon'
import { DownArrowIcon } from '../icons/DownArrowIcon'
import { Modal } from '../modal/Modal'
import produce from 'immer'

export const Templates = () => {
  const accessToken = useAccessToken()
  const queryClient = useQueryClient()
  const [templateId, setTemplateId] = useState<string | null>(null)
  const [templates, setTemplates] = useState<ExtendedITemplate[]>([])
  const [templatePages, setTemplatePages] = useState<IPage[] | null>()
  const { data: templateData } = useQuery<ITemplate[]>(['/user/templates', accessToken])
  const { data } = useQuery<IPage[]>([`/user/pages/${templateId}`, accessToken], {
    enabled: !!templateId,
  })

  useEffect(() => {
    if (templateData) {
      setTemplates(
        templateData.map((item) => ({
          ...item,
          isActive: false,
        }))
      )
    }
  }, [templateData])

  useEffect(() => {
    if (data) {
      setTemplatePages((prev) => {
        if (prev?.find((item) => item.templateId === templateId)) return data
        if (!prev) return data
        return [...prev, ...data]
      })
    }
  }, [data, templateId])

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
          return [
            ...(prev as ExtendedITemplate[]),
            (data as AxiosResponse).data.map((item: ITemplate) => ({
              ...item,
              isActive: false,
            })),
          ]
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
        {templates?.map((el: ExtendedITemplate) => {
          return (
            <React.Fragment key={el.id}>
              <Flex minW="full" justifyContent="space-between" alignItems="center">
                <Text fontWeight="bold" fontSize="sm">
                  <Flex justifyItems="center" alignItems="center">
                    <IconButton
                      variant="ghost"
                      aria-label="DropDown"
                      icon={<ArrowIcon />}
                      onClick={() => {
                        setTemplates(
                          produce((draft) => {
                            const template = draft.find(
                              (item) => item.id === el.id
                            ) as ExtendedITemplate
                            template.isActive = !template.isActive
                          })
                        )
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
                    ?.filter((item) => el.isActive && item.templateId === el.id)
                    .map((item) => {
                      return (
                        <Flex dir="column" key={item.id}>
                          {
                            <Button variant="ghost" mb="2">
                              <Text fontSize="xs">{item.name}</Text>
                            </Button>
                          }
                        </Flex>
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

interface ExtendedITemplate extends ITemplate {
  isActive: boolean
}
