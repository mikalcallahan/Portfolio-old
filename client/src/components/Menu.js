/* Menu.js
 *
 * @author Mikal Callahan
 * @version a-0.0.1
 */

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MenuList from 'components/MenuList'
import 'styles/menu.scss'

/* Menu component
 *
 * @returns router wrapped menu
 * @todo possibly make a true Component
 */
const Menu = () => (
  <Router forceRefresh={true}>
    <nav className='nav nav--menu'>
      <MenuList />
    </nav>
  </Router>
)

export default Menu
