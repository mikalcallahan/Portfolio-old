/* About.js
 *
 * @author Mikal Callahan
 * @version a-0.0.1
 */

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'
import PageTitle from 'components/PageTitle.js'
import Paragraph from 'components/Paragraph.js'
import ProjectList from 'components/ProjectList.js'
import 'styles/about.scss'
// import cose from './cose.jpg'
//import foodgorilla from 'assets/works/foodgorilla.png'
//import bhart from 'assets/works/bhart.jpg'

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

  constructor()  {
    super()
    this.handleScroll = this.handleScroll.bind(this)
    this.state = { 
      opacity: 0,
    }
  }

  async componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.onscroll =()=>{
      this.setState(
        {
          //pageTop: document.scrolTop(),
          currentScrollHeight: window.scrollY
        })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    //}
    // urlPosts = 'http://localhost:1337/posts'
/*    axios.get('http://localhost:1337/posts', {
    }).then(response => {
      // Handle success.
      console.log('Got some data', response.data[0].title)
    }).catch(error => {
      // Handle error.
      console.log('An error occurred:', error)
    });
    */
    }

  handleScroll(e) {
    console.log('this is scrolling')
  }
  
  render() {
    // const opacity = Math.min(100 / this.state.currentScrollHeight, 1)
    // const { match, location, history } = this.props
    const introParagraph = `I am a software developer and UI/UX designer in love with the process of designing and developing user experiences.
       I create full-stack solutions to web oriented needs, from e-commerce to web apps.`
      /*
    const selectedWorks = [
      {
        id: '0',
        name: 'Cosé, aménagement intérior',
        img: {},
      }
    ]
    */
      /*    function ListWorks(props) {
      // let worksList = selectedWorks.map(item => (
      let worksList = ProjectList.map(item => (
        <li className='work' key={item.id}>
          <img className='work' alt='freelance project' src={item.img}/>
        </li>
      ))
      return (
        <div className='works'>
          <ul className='works__list'>{worksList}</ul>
        </div>
      )
    }
    */
    const specializeIn = [
      {
        id: '0',
        name: 'UI/UX Design',
        desc: 'User Centered Modern Designs are what I find myself tending to create. I am constantly inspired by not just design, but nature and conversation as well. Each experience I come out of shapes my perspective in some way and in turn shapes my designs.',
      },
      {
        id: '1',
        name: 'Full-Stack Development',
        desc: 'Front-end, Back-end, or both I’ve got you covered. With a background in computer science, I understand what it takes to write efficienct, clean, and future-proof code. A passion for technology keeps my up-to-date with the latest trends and lasting tools.',
      },
      {
        id: '2',
        name: 'SEO / E-Commerce',
        desc: 'Helping you stay on top of the search engines. Constantly growing with Google’s search algorithms and social media trackers.',
      },
      { id: '3', name: 'Consulting', desc: 'If you just want some advice, I offer consulting in UI/UX, branding, marketing, creative strategies, and social media.', },
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
          <p className='p specialize__title'>{item.name}</p>
          <p className='p--sub specialize__desc'>{item.desc}</p>
        </li>
      ))
      return (
        <div className='specialize'>
          <h4> I specialize in </h4>
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
          <h4> I create </h4>
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
        <Paragraph className='intro' size='p--xl' paragraph={introParagraph} />
        <ProjectList />
        <Specialize />
        <Create />
      </section>
    )
  }
}
