/* Portfolio.js
 *
 * @author Mikal Callahan
 * @version a-0.0.1
 */

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import PageTitle from 'components/PageTitle'
import Paragraph from 'components/Paragraph'
import Project from 'components/Project'

/* Portfolio class
 *
 * @class
 * @returns portfolio page
 * @todo possibly move projects to seperate component
 */
export default class Portfolio extends Component {
  render() {
    const introParagraph = `Below is an excerpt of digitally crafted pieces with a focus on user-centered experiences, visual appeal, and functionality.`
    const projects = [
      {
        key: '0',
        name: 'Food Gorilla',
        role: 'Creative and Technical Vision',
        desc:
          'A restaurant discovery  suited to finding you the perfect match.',
        img: [{ src: 'https://source.unsplash.com/random' }],
      },
      {
        key: '1',
        name: 'Heinz Enterprises',
        role: 'Web Design, Development',
        desc:
          'An enterprises website for Bettina Heinz to host her chemistry related works.',
        img: [{ src: 'https://source.unsplash.com/random' }],
      },
      {
        key: '2',
        name: 'Bettina Heinz Art',
        role: 'Web Design, Development, E-Commerce',
        desc:
          'A completely original website dedicated to being the E-Commerce platform for Bettina Heinz to sell her art.',
        img: [{ src: 'https://source.unsplash.com/random' }],
      },
      {
        key: '3',
        name: 'Tiled LLC, Instructure',
        role: 'Full-Stack Development',
        desc:
          'Worked in-house at Tiled to develop a web app for their presentation platform to be used in Instructure’s Canvas and Bridge.',
        img: [{ src: 'https://source.unsplash.com/random' }],
      },
    ]
    return (
      <section className='portfolio'>
        <PageTitle title='Selected Works' />
        <Paragraph className='p--xl' paragraph={introParagraph} />
        <Project project={projects} />
      </section>
    )
  }
}
