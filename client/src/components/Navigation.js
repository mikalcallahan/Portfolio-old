/* Navigation.js
 *
 * @author Mikal Callahan
 * @version a-0.0.1
 *
 */

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import About from 'views/About'
import Portfolio from 'views/Portfolio'

/* Navigation Component for routing
 *
 * @returns Router
 * @todo turn into actual component?
 */

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
