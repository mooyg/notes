import { useContext } from 'react'
import { IUserContext, UserContext } from '../components/providers/User.provider'

export const useUser = (): IUserContext => {
  const userContext = useContext(UserContext)
  if (!userContext) {
    throw Error('Need context')
  }
  return userContext
}
