import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { withRouter } from 'react-router-dom'
import 'styles/about.scss'

class About extends Component {
  constructor(props) {
    super(props)
  }
  /*
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }
  */
  render() {
    // const { match, location, history } = this.props
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

    function Header(props) {
      return <h1 className='offset--red'> Mikal Callahan </h1>
    }
    function Intro(props) {
      return (
        <p>
          {' '}
          I am a software developer and ui/ux designer in love with the process
          of designing and developing user experiences. I create full-stack
          solutions to web oriented needs, from e-commerce to web apps.{' '}
        </p>
      )
    }
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
          <img
            className='specialize__img'
            src='https://source.unsplash.com/random'
            alt='mikal web developer'
          />
        </div>
      )
    }
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
            Bettina Heinz, Adaptive Web Studio, Heavenly Gift Baskets, and
            Tiled.
          </p>
        </div>
      )
    }
    return (
      <div className='about'>
        <Header />
        <Intro />
        <Specialize />
        <Create />
      </div>
    )
  }
}

export default About
