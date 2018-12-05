import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import About from 'views/About'
import Portfolio from 'views/Portfolio'
import 'styles/navigation.scss'

const Navigation = () => (
  <Router>
    <div>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__list-item'>
            <NavLink activeClassName='active' to='/about/'>
              About
            </NavLink>
          </li>
          <li className='nav__list-item'>
            <NavLink activeClassName='active' to='/portfolio/'>
              Portfolio
            </NavLink>
          </li>
          <li className='nav__list-item'>
            <button className='btn'>Sitemap</button>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/about/' component={About} />
        <Route path='/portfolio/' component={Portfolio} />
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </div>
  </Router>
)

export default Navigation
