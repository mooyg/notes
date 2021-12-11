import { IconButton } from '@chakra-ui/button'
import { Flex, Text } from '@chakra-ui/layout'
import { templateDir } from '@tauri-apps/api/path'
import produce from 'immer'
import React, { useEffect, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'urql'
import { useAccessToken } from '../../hooks/useAccessToken'
import { useLazyQuery } from '../../hooks/useLazyQuery'
import { IPage, ITemplate } from '../../interfaces'
import { CREATE_PAGE, CREATE_TEMPLATE, GET_PAGES_BY_TEMPLATEID, GET_TEMPLATES } from '../../queries'
import { Emoji } from '../emojis/Emoji'
import { ArrowIcon } from '../icons/ArrowIcon'
import { DownArrowIcon } from '../icons/DownArrowIcon'
import { Modal } from '../modal/Modal'
import { PagesDropdown } from './PagesDropdown'
export const Templates = () => {
  const accessToken = useAccessToken()

  const [dropdowns, setDropdowns] = useState<IDropdowns>({
    activeDropdownId: null,
    dropdowns: [],
  })

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

  const [templatePages, getPages] = useLazyQuery<Record<'getPagesByTemplateId', IPage[]>>({
    query: GET_PAGES_BY_TEMPLATEID,
  })
  const [, createTemplate] = useMutation(CREATE_TEMPLATE)
  const [, createPage] = useMutation(CREATE_PAGE)

  useEffect(() => {
    if (templateData) {
      console.log(templateData)
      setDropdowns({
        activeDropdownId: null,
        dropdowns: [
          ...templateData.getTemplates.map((template) => ({
            templateName: template.name,
            templateId: template.id,
          })),
        ],
      })
    }
  }, [templateData])

  useEffect(() => {
    console.log(templatePages)
    if (templatePages) {
      setDropdowns(
        produce((draft) => {
          return {
            ...draft,
            dropdowns: draft.dropdowns.map((item) => {
              if (item.templateId === draft.activeDropdownId) {
                return {
                  ...item,
                  templatePages: templatePages.data.getPagesByTemplateId,
                }
              }
              return item
            }),
          }
        })
      )
    }
  }, [templatePages])
  console.log(dropdowns)
  return (
    <Flex p="16px" flexDir="column">
      <Flex minW="full" justifyContent="space-between" alignItems="center">
        <Text>Notes</Text>
        <Modal
          heading="Template"
          onSumbit={({ name }) => {
            createTemplate(
              {
                templateName: name,
              },
              {
                fetchOptions: () => {
                  return {
                    headers: {
                      Authorization: `Bearer ${accessToken}`,
                    },
                  }
                },
              }
            )
          }}
        ></Modal>
      </Flex>
      <Flex flexDir="column">
        {dropdowns?.dropdowns.map((template) => (
          <React.Fragment key={template.templateId}>
            <Flex justifyItems="center" alignItems="center">
              <IconButton
                variant="ghost"
                aria-label="DropDown"
                icon={
                  dropdowns.activeDropdownId === template.templateId ? (
                    <DownArrowIcon />
                  ) : (
                    <ArrowIcon />
                  )
                }
                onClick={() => {
                  setDropdowns(
                    produce((draft) => {
                      draft.activeDropdownId = template.templateId
                    })
                  )
                  getPages({
                    templateId: template.templateId,
                  })
                }}
              />
              <Emoji shortName="closed_book" />
              <Text fontWeight="semibold">{template.templateName}</Text>
              <Modal
                heading="Page"
                onSumbit={({ name }) => {
                  createPage(
                    {
                      pageName: name,
                      templateId: template.templateId,
                    },
                    {
                      fetchOptions: () => {
                        return {
                          headers: {
                            Authorization: `Bearer ${accessToken}`,
                          },
                        }
                      },
                    }
                  )
                }}
              />
            </Flex>
            {template.templateId === dropdowns.activeDropdownId && (
              <PagesDropdown dropdowns={dropdowns} clickedTemplate={template.templateId} />
            )}
          </React.Fragment>
        ))}
      </Flex>
    </Flex>
  )
}
export interface IDropdowns {
  activeDropdownId: string | null
  dropdowns: Dropdown[]
}

interface Dropdown {
  templateId: string
  templateName: string
  templatePages?: IPage[]
}
