import { result } from 'lodash'
import { useMemo, useState } from 'react'
import { OperationResult, useClient, TypedDocumentNode } from 'urql'
import { useAccessToken } from './useAccessToken'

interface UseLazyQueryArgs {
  query: TypedDocumentNode<any, object>
}

type UseLazyQueryResponse = [OperationResult<any, object> | undefined, (variables?: object) => void]
export const useLazyQuery = ({ query }: UseLazyQueryArgs): UseLazyQueryResponse => {
  const client = useClient()
  const accessToken = useAccessToken()
  const [data, setData] = useState<OperationResult<any, object>>()

  return [
    data,
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
          .then((result) => setData(result))
      }
    },
  ]
}
