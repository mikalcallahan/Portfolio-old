import React, { Component } from 'react'
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

    function FooterLinks(props) {
      const footerList = footerLinks.map(link => (
        <li className='footer__link' key={link.id}>
          <a href={link.url} target='_blank' rel='noopener noreferrer'>
            {link.name}
          </a>
        </li>
      ))
      return <ul className='footer__links'>{footerList}</ul>
    }
    return <section className='footer'>{<FooterLinks />}</section>
  }
}

export default Footer
