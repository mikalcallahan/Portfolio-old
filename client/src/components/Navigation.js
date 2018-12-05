import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import About from 'views/About'
import Portfolio from 'views/Portfolio'
import 'styles/navigation.scss'

const Navigation = () => (
  <Router>
    <Switch>
      <Route path='/about/' component={About} />
      <Route path='/portfolio/' component={Portfolio} />
      <Redirect to='/about' />
    </Switch>
  </Router>
)

export default Navigation
