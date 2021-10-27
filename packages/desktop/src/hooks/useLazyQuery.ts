import { result } from 'lodash'
import { useMemo, useState } from 'react'
import { CombinedError, useClient, TypedDocumentNode } from 'urql'
import { useAccessToken } from './useAccessToken'

interface UseLazyQueryArgs {
  query: TypedDocumentNode<any, object>
}
type UseLazyQueryState<T> = {
  data: T
  error?: CombinedError
  extensions?: Record<string, any>
}

type UseLazyQueryResponse<T> = [UseLazyQueryState<T>, (variables?: object) => void]
export const useLazyQuery = <T>({ query }: UseLazyQueryArgs): UseLazyQueryResponse<T> => {
  const client = useClient()
  const accessToken = useAccessToken()
  const [data, setData] = useState<UseLazyQueryState<T>>()
  return [
    data!,
    (variables?: object) => {
      if (variables) {
        client
          .query(query, variables, {
            requestPolicy: 'network-only',
            fetchOptions: () => {
              return {
                headers: { Authorization: `Bearer ${accessToken}` },
              }
            },
          })
          .toPromise()
          .then((result) => setData(result as UseLazyQueryState<T>))
      }
    },
  ]
}
