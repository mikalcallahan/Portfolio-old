/* Header.js
 *
 * @author: Mikal Callahan
 * @version: a-0.0.1
 */

// imports
import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import MenuOverlay from 'components/MenuOverlay'
import { Plus } from 'react-feather'
import Logo from 'components/Logo' 
//import 'styles/_components.scss'
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
/* Header
 *
 * @class
 * @returns returns header
 * @todo refactor like Footer.js
 */
export default class Header extends Component {
  /* Constructor
   * @params props
   */
  constructor(props) {
    super(props)
    this.state = { isMenuOpen: false }
  }

  /* GetLinks
   *
   * @returns list of navigation links
   */
  getLinks = () => {
    let linksList
    linksList = links.map(link => (
      <li
        className='nav-list__list-item nav-list__list-item--route'
        key={link.id}
      >
        <NavLink className='link' activeClassName='active' to={link.path}>
          {link.name}
        </NavLink>
      </li>
    ))
    return linksList
  }

  /* toggleMenu
   * toggles the state of isMenuOpen
   *
   */
  toggleMenu = () => {
    const toggle = !this.state.isMenuOpen
    this.setState({ isMenuOpen: toggle })
  }

  render() {
    return (
      <Router forceRefresh={true}>
        {this.state.isMenuOpen ? (
          <nav className='nav nav--menu'>
            {<Logo/>}
            <span className='close-div'>
              <Plus onClick={this.toggleMenu} className='btn btn--close' />
            </span>
            <MenuOverlay isOpen={this.isMenuOpen} />
          </nav>
        ) : (
          <nav className='nav nav-short'>
            <ul className='nav-list'>
              {<Logo/>}
              {/*this.getLinks()*/}{' '}
              <li
                onClick={this.toggleMenu}
                className='nav-list__list-item nav-list__list-item--sitemap'
              >
                <span className='link'>Sitemap</span>
              </li>
            </ul>
          </nav>
        )}
      </Router>
    )
  }
}
