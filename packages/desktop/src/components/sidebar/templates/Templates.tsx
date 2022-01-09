import { IconButton, Flex, Text, useAccordionItemState, Button, Box } from '@chakra-ui/react'
import { IPage } from '../../../interfaces'
import { CreateTemplate } from './CreateTemplate'
import { useLazyQuery, useQuery } from '@apollo/client'
import { GET_PAGES_BY_TEMPLATEID, GET_TEMPLATES } from '../../../queries'
import { ITemplate } from '../../../interfaces/index'
import React, { useEffect, useState } from 'react'
import { useImmer } from 'use-immer'
import { Pages } from '../pages/Pages'
import { Emoji } from '../../emojis/Emoji'
import { ArrowIcon } from '../../icons/ArrowIcon'
import { DownArrowIcon } from '../../icons/DownArrowIcon'

export const Templates = () => {
  const { data: templates } = useQuery<Record<'getTemplates', ITemplate[]>>(GET_TEMPLATES)
  const [getPages, { data: pages }] =
    useLazyQuery<Record<'getPagesByTemplateId', IPage[]>>(GET_PAGES_BY_TEMPLATEID)
  const [activeTemplateId, setActiveTemplateId] = useState<string | null>('')
  const handleDropdown = (template: ITemplate) => {
    setActiveTemplateId((prev) => {
      if (prev === template.id) return null
      return template.id
    })
    getPages({
      variables: {
        templateId: template.id,
      },
    })
  }
  return (
    <Flex flexDirection={'column'}>
      <CreateTemplate />
      {templates?.getTemplates?.map((template) => {
        return (
          <React.Fragment key={template.id}>
            <Flex alignItems={'center'}>
              <Button my="1" variant={'ghost'} onClick={() => handleDropdown(template)}>
                {activeTemplateId === template.id ? <DownArrowIcon /> : <ArrowIcon />}
              </Button>
              <Flex>
                <Emoji shortName="closed_book" />
                {template.name}
              </Flex>
            </Flex>
            {activeTemplateId === template.id && (
              <Pages activeTemplateId={activeTemplateId} pages={pages?.getPagesByTemplateId} />
            )}
          </React.Fragment>
        )
      })}
    </Flex>
  )
}
export interface ISidebarContent {
  activeTemplateId: string | null
  templates: Template[]
}

interface Template {
  templateId: string
  templateName: string
  templatePages?: IPage[]
}
