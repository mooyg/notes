import React, { createContext, useMemo, useState } from 'react'
import { IUser } from '../../interfaces'

export interface IUserContext {
  user: IUser | null | undefined
  setUser: (user: IUser | undefined | null) => void
}

export const UserContext = createContext<IUserContext | null | undefined>(null)

export const UserProvider = ({ children }: Record<'children', React.ReactNode>) => {
  const [user, setUser] = useState<IUser | null>()

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  )
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}
