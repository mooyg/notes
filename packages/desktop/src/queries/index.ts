import { gql } from 'urql'

export const GET_TEMPLATES = gql`
  query GetTemplates {
    getTemplates {
      name
      id
    }
  }
`

export const GET_PAGES_BY_TEMPLATEID = gql`
  query GetPagesByTemplateId($TemplateId: String!) {
    getPagesByTemplateId(templateId: $TemplateId) {
      name
      id
      templateId
    }
  }
`
