import { useEffect } from 'react'
import { useUser } from './useUser'

import { IUser } from '../interfaces'
import axios from '../axios/axios'
export const useInitialAuth = (accessToken: string) => {
  const { setUser } = useUser()

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get<IUser | null>('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      setUser(data)
    })()
  }, [accessToken, setUser])
}
