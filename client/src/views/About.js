/* About.js
 *
 * @author Mikal Callahan
 * @version a-0.0.1
 */

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import PageTitle from 'components/PageTitle.js'
import Paragraph from 'components/Paragraph.js'
import 'styles/about.scss'

/* About Class
 *
 * @class
 * @returns About Page
 */

export default class About extends Component {
  /*
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }
  */
  render() {
    // const { match, location, history } = this.props
    const introParagraph = `I am a software developer and ui/ux designer in love with the process of designing and developing user experiences.
       I create full-stack solutions to web oriented needs, from e-commerce to web apps.`

    const Selfie = () => (
      <div className='selfie'>
        <img
          className='selfie__img'
          src='https://source.unsplash.com/random'
          alt='mikal web developer'
        />
      </div>
    )

    const specializeIn = [
      {
        id: '0',
        name: 'UI/UX Design',
        desc: 'User Centered Modern Designs',
      },
      {
        id: '1',
        name: 'Full-Stack Development',
        desc: 'Front-end, Back-end, or both I’ve got you covered',
      },
      {
        id: '2',
        name: 'SEO / E-Commerce',
        desc: 'Helping you stay on top of the search engines',
      },
      { id: '3', name: 'Consulting', desc: 'If you just want some advice' },
    ]

    /* Specialize Component
     *
     * Displays the specialize section of about
     * @params props
     * @returns specialize section
     * @todo rename/refactor to general component
     */
    function Specialize(props) {
      let specializedList = specializeIn.map(item => (
        <li className='specialize__link' key={item.id}>
          <p>{item.name}</p>
          <p className='p--sub'>{item.desc}</p>
        </li>
      ))
      return (
        <div className='specialize'>
          <h5> I specialize in </h5>
          <ul className='specialize__list'>{specializedList}</ul>
        </div>
      )
    }
    /* Create Component
     *
     * Displays the create section of about
     * @params props
     * @returns create section
     * @todo rename/refactor to general component
     */
    function Create(props) {
      return (
        <div className='create'>
          <h5> I create </h5>
          <p>
            Living designs with lifelong partners. Each partnership is different
            and the values and needs of those I work with always come first.
            After our goals have been defined I develop an agile based roadmap
            for the project, where we will iterate through designs and
            development.
          </p>
          <p>
            I have had the pleasure of working with wonderful people including
            Bettina Heinz,{' '}
            <span className='underline'>
              {' '}
              <a
                className='link link--inherit'
                href='https://www.adaptivewebstudio.com/'
              >
                {' '}
                Adaptive Web Studio
              </a>
            </span>
            , Heavenly Gift Baskets, and{' '}
            <span className='underline'>
              <a className='link link--inherit' href='https://tiled.co/'>
                Tiled
              </a>
            </span>
            .
          </p>
        </div>
      )
    }
    return (
      <section className='about'>
        <PageTitle title='Mikal Callahan' />
        <Paragraph className='intro p--xl' paragraph={introParagraph} />
        <Selfie />
        <Specialize />
        <Create />
      </section>
    )
  }
}
