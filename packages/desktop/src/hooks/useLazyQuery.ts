import { result } from 'lodash'
import { useMemo, useState } from 'react'
import { OperationResult, useClient, TypedDocumentNode } from 'urql'
import { useAccessToken } from './useAccessToken'

interface UseLazyQueryArgs {
  query: TypedDocumentNode<any, object>
  variables?: Record<string, unknown>
}

type UseLazyQueryResponse = [OperationResult<any, object> | undefined, () => void]
export const useLazyQuery = ({ query, variables }: UseLazyQueryArgs): UseLazyQueryResponse => {
  const client = useClient()
  const accessToken = useAccessToken()
  const [data, setData] = useState<OperationResult<any, object>>()
  console.log(variables)
  const execQuery = client.query(query, variables, {
    fetchOptions: () => {
      return {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    },
  })

  return [
    data,
    () => {
      execQuery.toPromise().then((result) => setData(result))
    },
  ]
}
