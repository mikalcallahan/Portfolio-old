import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import 'styles/header.scss'

const links = [
  {
    id: '0',
    name: 'About',
    path: '/about',
  },
  {
    id: '1',
    name: 'Portfolio',
    path: '/portfolio',
  },
]

function Header(props) {
  let linksList = links.map(link => (
    <li
      className='nav-list__list-item nav-list__list-item--route'
      key={link.id}
    >
      <NavLink activeClassName='active' to={link.path}>
        {link.name}
      </NavLink>
    </li>
  ))
  return (
    <Router forceRefresh={true}>
      <nav className='navigation'>
        <ul className='nav-list'>
          {linksList}{' '}
          <li className='nav-list__list-item nav-list__list-item--sitemap'>
            <span>Sitemap</span>
          </li>
        </ul>
      </nav>
    </Router>
  )
}

export default Header
