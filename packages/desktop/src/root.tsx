import { App } from './App'
import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
