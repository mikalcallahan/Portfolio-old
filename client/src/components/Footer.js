import React, { Component } from 'react'
import PreFooter from 'components/PreFooter'
import FooterLinks from 'components/FooterLinks'
import 'styles/footer.scss'

class Footer extends Component {
  render() {
    const footerLinks = [
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
    return (
      <footer className='footer'>
        {<PreFooter />}
        {<FooterLinks links={footerLinks} />}
      </footer>
    )
  }
}

export default Footer
