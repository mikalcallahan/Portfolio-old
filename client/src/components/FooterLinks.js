/* FooterLinks.js
 *
 * @author: Mikal Callahan
 * @version: a-0.0.1
 */

// Imports
import React from 'react'

/*
 * Maps the footer links to footerList as an unordered list
 *
 * @returns <ul> of all links
 */
export default function FooterLinks(props) {
  const footerList = props.links.map(link => (
    <li className='footer__link' key={link.id}>
      <a
        className='link'
        href={link.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        {link.name}
      </a>
    </li>
  ))
  return <ul className='footer__links'>{footerList}</ul>
}
