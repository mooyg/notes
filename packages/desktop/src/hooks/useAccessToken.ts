import { useEffect } from 'react'
import { useLocation } from 'react-router'
import useLocalStorage from './useLocalStorage'
export const useAccessToken = (): string | null => {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '')
  const queryParam = new URLSearchParams(useLocation().search).get('accessToken')
  useEffect(() => {
    queryParam && setAccessToken(queryParam)
  }, [queryParam, setAccessToken])

  return accessToken ? accessToken : null
}
