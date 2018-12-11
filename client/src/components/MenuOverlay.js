/* MenuOverlay.js
 *
 * @author Mikal Callahan
 * @version a-0.0.1
 */

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'feather-icons'
import MenuList from 'components/MenuList'
import 'styles/menu-overlay.scss'

/* Menu component
 *
 * @returns router wrapped menu
 * @todo possibly make a true Component
 */

const MenuOverlay = () => (
  <Router forceRefresh={true}>
    <nav className='nav nav--menu'>
      <i data-feather='plug' />
      <MenuList />
    </nav>
  </Router>
)

export default MenuOverlay
