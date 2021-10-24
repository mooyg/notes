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
  query GetPagesByTemplateId($templateId: String!) {
    getPagesByTemplateId(templateId: $templateId) {
      name
      id
      templateId
    }
  }
`
export const CREATE_TEMPLATE = gql`
  mutation CreateTemplate($templateName: String!) {
    createTemplate(templateName: $templateName) {
      name
    }
  }
`
