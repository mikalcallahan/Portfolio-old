import React from 'react'

function FooterLinks(props) {
  const footerList = props.links.map(link => (
    <li className='footer__link' key={link.id}>
      <a href={link.url} target='_blank' rel='noopener noreferrer'>
        {link.name}
      </a>
    </li>
  ))
  return <ul className='footer__links'>{footerList}</ul>
}

export default FooterLinks
