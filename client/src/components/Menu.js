import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MenuList from 'components/MenuList'
import 'styles/menu.scss'

const Menu = () => (
  <Router forceRefresh={true}>
    <nav className='nav nav--menu'>
      <MenuList />
    </nav>
  </Router>
)

export default Menu
