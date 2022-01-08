import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { UserProvider } from './components/providers/User.provider'
import { InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client'
import { ENDPOINT } from './constants'

const client = new ApolloClient({
  uri: `${ENDPOINT}/graphql`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('accessToken') as string)}`,
  },
  connectToDevTools: true,
})

ReactDOM.render(
  <UserProvider>
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ChakraProvider>
  </UserProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
