import React, { Component } from 'react'
import PreFooter from 'components/PreFooter'
import FooterLinks from 'components/FooterLinks'
import 'styles/footer.scss'

class Footer extends Component {
  constructor(props) {
    super(props)
  }
  getFooterLinks = () => {
    console.log('540')
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

    //return footerLinks
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

export default Footer
