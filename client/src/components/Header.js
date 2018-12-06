import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import Menu from 'components/Menu'
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

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { isMenuOpen: false }
  }

  getLinks = () => {
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
    return linksList
  }

  toggleMenu = () => {
    const toggle = !this.state.isMenuOpen
    this.setState({ isMenuOpen: toggle })
  }

  render() {
    return (
      <Router forceRefresh={true}>
        {this.state.isMenuOpen ? (
          <Menu />
        ) : (
          <nav className='nav'>
            <ul className='nav-list'>
              {this.getLinks()}{' '}
              <li className='nav-list__list-item nav-list__list-item--sitemap'>
                <span onClick={this.toggleMenu}>Sitemap</span>
              </li>
            </ul>
          </nav>
        )}
      </Router>
    )
  }
}

export default Header
