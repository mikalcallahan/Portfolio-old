import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import PageHeader from 'components/PageHeader'
import Paragraph from 'components/Paragraph'

// import 'styles/portfolio.scss'

export default class Portfolio extends Component {
  render() {
    const introParagraph = `Below is an excerpt of digitally crafted pieces with a focus on user-centered experiences, visual appeal, and functionality.`
    return (
      <section className='portfolio'>
        <PageHeader title='Selected Works' />
        <Paragraph className='p--xl' paragraph={introParagraph} />
      </section>
    )
  }
}
