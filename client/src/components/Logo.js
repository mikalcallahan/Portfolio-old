/* Logo
 *
 * @author Mikal
 * @version alpha 0.1
 */

import React from 'react'
import styled from 'styled-components'
import logo from 'assets/logo.svg'
import 'styles/logo.scss'

const MC = styled.img`
  width: 75%;
`

/* Logo
 *
 * @returns logo
 */
const Logo = () => (
  <p className='logo link'>
    <a href='https://mikal.co'>
      <MC src={logo} alt='Mikal Callahan' />
    </a>
  </p>
)

export default Logo
