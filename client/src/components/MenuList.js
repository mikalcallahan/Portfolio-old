import React from 'react'
import { NavLink } from 'react-router-dom'

function MenuList(props) {
  const menuItems = [
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
  let menuList = menuItems.map(item => (
    <li className='menu-list__item' key={item.id}>
      <NavLink activeClassName='active' to={item.path}>
        {item.name}
      </NavLink>
    </li>
  ))
  return <ul className='menu-list'> {menuList} </ul>
}

export default MenuList
