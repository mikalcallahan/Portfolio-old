/* Footer.js
 *
 * @author: Mikal Callahan
 * @version: a-0.0.1
 */

// Imports
import React from 'react'
import styled from 'styled-components'
import PreFooter from 'components/PreFooter'
import FooterLinks from 'components/FooterLinks'
import breakpoint from 'styles/breakpoints'
import variables from 'styles/variables'
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
  grid-gap: ${variables.columnGutterPx};
  grid-gap: ${variables.columGutter};
  flex-wrap: wrap;
  /*padding: 1px;
  padding: 1rem;
  */
  padding: ${variables.paddingPx};
  padding: ${variables.padding};
  height: auto;
  position: relative;
  width: 100%;
  ${breakpoint.small`
    display: grid;
    grid-column: ${variables.gridColumn};
    grid-template-columns: ${variables.gridTemplateColumnMedium};
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
