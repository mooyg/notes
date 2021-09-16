import { Center, Button, Link as ChakraLink } from '@chakra-ui/react'
import React from 'react'
import './styles/global.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GithubIcon } from './components/icons/GithubIcon'
import { Home } from './pages/Home'
export const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Center>
            <ChakraLink href="http://localhost:8080/api/auth/">
              <Button leftIcon={<GithubIcon />}>Sign in with Github</Button>
            </ChakraLink>
          </Center>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
