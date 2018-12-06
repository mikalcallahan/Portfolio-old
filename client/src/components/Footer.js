/* Footer.js
 *
 * @author: Mikal Callahan
 * @version: a-0.0.1
 */

// Imports
import React, { Component } from 'react'
import PreFooter from 'components/PreFooter'
import FooterLinks from 'components/FooterLinks'
import 'styles/footer.scss'

/* Footer class
 *
 * @class
 * @returns <footer>
 *
 */
export default class Footer extends Component {
  /* Gets footer links
   *
   * @returns {array[object]}footerLinks
   */
  getFooterLinks = () => {
    return [
      {
        id: '0',
        name: 'instagram',
        url: 'https://www.instagram.com/mikalcallahan/',
      },
      {
        id: '1',
        name: 'webring',
        url: 'https://webring.xxiivv.com/#random',
      },
      {
        id: '2',
        name: 'github',
        url: 'https://www.github.com/mikalcallahan',
      },
    ]
  }
  render() {
    return (
      <footer className='footer'>
        {<PreFooter />}
        {<FooterLinks links={this.getFooterLinks()} />}
      </footer>
    )
  }
}
