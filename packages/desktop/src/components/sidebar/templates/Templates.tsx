import { IconButton, Flex, Text, useAccordionItemState, Button } from '@chakra-ui/react'
import { IPage } from '../../../interfaces'
import { CreateTemplate } from './CreateTemplate'
import { useLazyQuery, useQuery } from '@apollo/client'
import { GET_PAGES_BY_TEMPLATEID, GET_TEMPLATES } from '../../../queries'
import { ITemplate } from '../../../interfaces/index'
import { useEffect, useState } from 'react'
import { useImmer } from 'use-immer'
import { Pages } from '../pages/Pages'

export const Templates = () => {
  const { data: templates } = useQuery<Record<'getTemplates', ITemplate[]>>(GET_TEMPLATES)
  const [getPages, { data: pages }] =
    useLazyQuery<Record<'getPagesByTemplateId', IPage[]>>(GET_PAGES_BY_TEMPLATEID)
  const [activeTemplateId, setActiveTemplateId] = useState('')
  const handleDropdown = (template: ITemplate) => {
    setActiveTemplateId(template.id)
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
          <>
            <Button my="1" onClick={() => handleDropdown(template)}>
              {template.name}
            </Button>
            {activeTemplateId === template.id && (
              <Pages activeTemplateId={activeTemplateId} pages={pages?.getPagesByTemplateId} />
            )}
          </>
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
