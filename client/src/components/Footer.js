/* Footer.js
 *
 * @author: Mikal Callahan
 * @version: a-0.0.1
 */

// Imports
import React, { Component } from 'react'
import styled from 'styled-components'
import PreFooter from 'components/PreFooter'
import FooterLinks from 'components/FooterLinks'
import breakpoint from 'styles/breakpoints'
import 'styles/footer.scss'
import 'styles/_variables.scss'

/* Gets footer links
 *
 * @returns {array[object]} footer links
 */
const getFooterLinks = () => {
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

const Footer = styled.footer`
  bottom: 0;
  display: flex;
  grid-gap: $column-gutter--px;
  grid-gap: $column-gutter;
  flex-wrap: wrap;
  padding: $padding-px;
  padding: $padding;
  height: auto;
  position: relative;
  width: 100%;
  ${breakpoint.small`
    display: grid;
    grid-template-columns: $grid-template-column--medium;
  `}
  ${breakpoint.medium`
    grid-template-columns: $grid-template-column--large;
  `}
`

/* export Footer
 *
 * @return {array[object]} <Footer>
 */

export default () => {
  return (
    <Footer className='footer'>
      {<PreFooter />}
      {<FooterLinks links={getFooterLinks()} />}
    </Footer>
  )
}
