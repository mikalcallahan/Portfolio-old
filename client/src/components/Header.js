import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

const Header = () => (
  <Router forceRefresh={true}>
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__list-item'>
          <NavLink activeClassName='active' to='/about'>
            About
          </NavLink>
        </li>
        <li className='nav__list-item'>
          <NavLink activeClassName='active' to='/portfolio'>
            Portfolio
          </NavLink>
        </li>
        <li className='nav__list-item'>
          <button className='btn'>Sitemap</button>
        </li>
      </ul>
    </nav>
  </Router>
)

export default Header
