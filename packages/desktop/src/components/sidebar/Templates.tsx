import { Flex, Text, IconButton, Button, FlexProps } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import { useAccessToken } from '../../hooks/useAccessToken'
import { IPage, ITemplate } from '../../interfaces'
import { Emoji } from '../emojis/Emoji'
import { ArrowIcon } from '../icons/ArrowIcon'
import { Modal } from '../modal/Modal'
import produce from 'immer'
import { usePage } from '../../hooks/usePage'
import { motion } from 'framer-motion'
import { PagesDropdown } from './PagesDropdown'
import { DownArrowIcon } from '../icons/DownArrowIcon'
import { useClient, useQuery } from 'urql'
import { GET_PAGES_BY_TEMPLATEID, GET_TEMPLATES } from '../../queries'
import { useLazyQuery } from '../../hooks/useLazyQuery'

export const Templates = () => {
  const MotionFlex = motion<FlexProps>(Flex)
  const accessToken = useAccessToken()
  const client = useClient()
  const { setPageId } = usePage()
  const [templateId, setTemplateId] = useState<string | null>(null)
  const [templates, setTemplates] = useState<ExtendedITemplate[]>([])
  const [templatePages, setTemplatePages] = useState<IPage[]>()
  const [{ data: templateData }] = useQuery<Record<'getTemplates', ITemplate[]>>({
    query: GET_TEMPLATES,
    context: useMemo(
      () => ({
        fetchOptions: () => {
          return {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        },
      }),
      []
    ),
  })
  const [foo, getPages] = useLazyQuery({
    query: GET_PAGES_BY_TEMPLATEID,
    variables: {
      templateId: templateId,
    },
  })

  console.log('FOO', foo)

  const [{ data }] = useQuery<IPage[]>({
    pause: !!templateId,
    query: GET_PAGES_BY_TEMPLATEID,
    context: useMemo(
      () => ({
        fetchOptions: () => {
          return {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        },
      }),
      []
    ),
    variables: {
      templateId: templateId,
    },
  })

  useEffect(() => {
    if (templateData) {
      setTemplates(
        templateData.getTemplates.map((item) => ({
          ...item,
          isActive: false,
        }))
      )
    }
  }, [templateData])
  useMemo(() => {
    if (data) {
      setTemplatePages(
        produce((draft) => {
          if (!draft) return data
          if (draft.find((item) => item.templateId === templateId)) return draft
          return [...draft, ...data]
        })
      )
    }
  }, [data, templateId])

  // const templateMutation: UseMutationResult = useMutation(
  //   (newTemplate) =>
  //     axios.post('/user/template/create', newTemplate, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     }),
  //   {
  //     onSuccess: (data) => {
  //       queryClient.setQueryData(['/user/templates', accessToken], (prev) => {
  //         return [
  //           ...(prev as ExtendedITemplate[]),
  //           (data as AxiosResponse).data.map((item: ITemplate) => ({
  //             ...item,
  //             isActive: false,
  //           })),
  //         ]
  //       })
  //     },
  //   }
  // )

  // const pagesMutation: UseMutationResult = useMutation((payload) =>
  //   axios.post(
  //     `/user/pages/create/${(payload as IPayload).templateId}`,
  //     {
  //       pageName: (payload as IPayload).pageName,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     }
  //   )
  // )
  return (
    <Flex p="16px" flexDir="column">
      <Flex minW="full" justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold">Notes</Text>
        <Modal
          heading="Template"
          onSumbit={({ name }) => {
            // templateMutation.mutate({
            //   templateName: name,
            // })
          }}
        />
      </Flex>
      <Flex flexDir="column">
        {templates?.map((el) => {
          return (
            <React.Fragment key={el.id}>
              <Flex justifyItems="center" alignItems="center">
                <IconButton
                  variant="ghost"
                  aria-label="DropDown"
                  icon={el.isActive ? <DownArrowIcon /> : <ArrowIcon />}
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
                    getPages()
                  }}
                />
                <Emoji shortName="closed_book" />
                <Text fontWeight="semibold">{el.name}</Text>
                <Modal
                  heading="Page"
                  onSumbit={({ name }) => {
                    // pagesMutation.mutate({
                    //   pageName: name,
                    //   templateId: el.id,
                    // })
                  }}
                />
              </Flex>
              <PagesDropdown el={el} templatePages={templatePages} />
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

export interface ExtendedITemplate extends ITemplate {
  isActive: boolean
}
