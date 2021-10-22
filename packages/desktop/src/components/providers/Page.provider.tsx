import { createContext, useMemo, useState } from 'react'
import React from 'react'
export interface IPageContext {
  pageId: string | null | undefined
  setPageId: React.Dispatch<React.SetStateAction<string | null | undefined>>
}
export const PageContext = createContext<IPageContext | null | undefined>(null)

export const PageProvider = ({ children }: Record<'children', React.ReactNode>) => {
  const [pageId, setPageId] = useState<string | null>()
  const contextValue = useMemo(
    () => ({
      pageId,
      setPageId,
    }),
    [pageId]
  )
  return <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>
}
