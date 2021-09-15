import { useEffect } from 'react'
import { useUser } from './useUser'
import { useQuery } from 'react-query'
import { IUser } from '../interfaces'
export const useInitialAuth = (accessToken: string) => {
  const { data } = useQuery<IUser | null>(['/api/auth/me', accessToken])

  const { setUser } = useUser()

  useEffect(() => {
    setUser(data)
  }, [data, setUser])
}
