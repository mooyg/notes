import { useContext } from 'react'
import { IPageContext, PageContext } from '../components/providers/Page.provider'

export const usePage = (): IPageContext => {
  const pageContext = useContext(PageContext)
  if (!pageContext) {
    throw Error('No Page Context')
  }
  return pageContext
}
