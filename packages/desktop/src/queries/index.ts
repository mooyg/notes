import { gql } from '@apollo/client'

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
export const CREATE_PAGE = gql`
  mutation CreatePage($templateId: String!, $pageName: String!) {
    createPage(templateId: $templateId, pageName: $pageName) {
      name
      id
      templateId
    }
  }
`
export const GET_PAGE = gql`
  query GetPage($pageId: String!) {
    getPage(pageId: $pageId) {
      name
      id
      content {
        children {
          shortName
          text
          children {
            text
          }
          type
          src
        }
      }
    }
  }
`
export const SAVE_CONTENT = gql`
  mutation SaveContent($pageId: String!, $content: Content) {
    saveContent(pageId: $pageId, content: $content) {
      name
      content {
        children {
          text
          type
        }
      }
    }
  }
`
