import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { UserProvider } from './components/providers/User.provider'
import { createClient, Provider, defaultExchanges } from 'urql'
import { devtoolsExchange } from '@urql/devtools'
import { PageProvider } from './components/providers/Page.provider'

const client = createClient({
  url: 'http://localhost:8080/graphql',
  exchanges: [devtoolsExchange, ...defaultExchanges],
})

ReactDOM.render(
  <UserProvider>
    <PageProvider>
      <ChakraProvider theme={theme}>
        <Provider value={client}>
          <App />
        </Provider>
      </ChakraProvider>
    </PageProvider>
  </UserProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
