/* PreFooter.js
 *
 * @author Mikal Callahan
 * @version a-0.0.1
 *
 */

import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

/* PreFooter
 *
 * PreFooter class
 * @class
 * @returns PreFooter
 * @todo refactor
 */
class PreFooter extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }
  getPageName = () => {
    const page = this.props.location.pathname.substr(1)
    if (page === 'about') return 'Selected Works'
    return 'About'
  }
  getPageLink = () => {
    const page = this.props.location.pathname.substr(1)
    if (page === 'about') return '/portfolio'
    return '/about'
  }

  render() {
    return (
      <section className='pre-footer'>
        <ul className='pre-footer__list'>
          <li className='pre-footer__link'>
            <a
              className='link email'
              href='mailto:mikal.callahan@icloud.com?subject=Hey there'
            >
              hello@mikal.co
            </a>
          </li>
          <li className='pre-footer__link'>
            <Router forceRefresh={true}>
              <NavLink className='link nav' to={this.getPageLink()}>
                {this.getPageName()}
              </NavLink>
            </Router>
          </li>
        </ul>
      </section>
    )
  }
}

export default withRouter(PreFooter)
