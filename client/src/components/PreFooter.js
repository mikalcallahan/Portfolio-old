/* PreFooter.js
 *
 * @author Mikal Callahan
 * @version a-0.0.1
 *
 */

import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

/* PreFooter
 *
 * PreFooter class
 * @class
 * @returns PreFooter
 * @todo refactor
 */
class PreFooter extends Component {
  render() {
    /*    const preFooterLinks = [
      {
        id: '0',
        name: 'mikal.callahan@icloud.com',
      },
      {
        id: '1',
        name: 'Selected Works',
      },
    ]
    */
    return (
      <section className='pre-footer'>
        <ul className='pre-footer__list'>
          <li className='pre-footer__link'>
            <a
              className='link email'
              href='mailto:mikal.callahan@icloud.com?subject=Hey there'
            >
              mikal.callahan@icloud.com
            </a>
          </li>
          <li className='pre-footer__link'>
            <Router forceRefresh={true}>
              <NavLink className='link' to='/portfolio'>
                Selected Works
              </NavLink>
            </Router>
          </li>
        </ul>
      </section>
    )
  }
}
/*
 *      <NavLink className='link' to='/about'>
        Selected Works
      </NavLink>
      */
export default PreFooter
