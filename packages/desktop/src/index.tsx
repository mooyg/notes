import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { UserProvider } from './components/providers/User.provider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools, ReactQueryDevtoolsPanel } from 'react-query/devtools'
import axios from './axios/axios'

const defaultQueryFn = async ({ queryKey }: any) => {
  const { data } = await axios.get(`${queryKey[0]}`, {
    headers: {
      Authorization: `Bearer ${queryKey[1]}`,
    },
  })
  return data
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      queryFn: defaultQueryFn,
    },
  },
})

ReactDOM.render(
  <UserProvider>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="top-right" />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </UserProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
