import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useLocalStorage from './useLocalStorage'
export const useAccessToken = (): string | null => {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '')
  const queryParam = new URLSearchParams(useLocation().search).get('accessToken')
  useEffect(() => {
    queryParam && setAccessToken(queryParam)
  }, [queryParam, setAccessToken])

  if (queryParam) return queryParam
  return accessToken ? accessToken : null
}
