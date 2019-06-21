/* ProjectList.js
 *
 * @author Mikal Callahan
 * @veresion a-0.0.1
 */

import React from 'react'
import axios from 'axios'
import cose from 'assets/works/cose.jpg'
import bhArt from 'assets/works/bhart.jpg'
import foodgorilla from 'assets/works/foodgorilla.png'
import unioncowork from 'assets/works/unioncowork.jpg'
import runriot from 'assets/works/runriotcrop.png'

import 'styles/project-list.scss'
// import Project from 'components/Project'

/* ProjectList Component
 *
 * Used to display the project list
 * @param props
 * @return ProjectList
 * @todo setup similar to FooterLinks or MenuList
 *
 */
const ProjectList = [
  {
    id: '0',
    name: 'Cosé, aménagement intérior',
    //src: {cose},
  },
  {
    id: '1',
    name: 'Bettina Heinz Art',
    src: { bhArt },
  },
]

//const WorkImg

function ListWorks(props) {
  // let worksList = selectedWorks.map(item => (
  /*let worksList = ProjectList.map(item => (
  <li className='work' key={item.id}>
    <img className='work' alt={item.name} src={item.src}/>
  </li>
  ))*/
  return (
    <div className='works'>
      <ul className='works__list'>
        <li className='work__row'>
          <div className='work__item' key='0'>
            <a href='https://www.figma.com/file/LSCWlA3XrTkpU8RUPlYV5grz/conceptions?node-id=177%3A38'>
              <img
                className='work__img'
                alt='Cosé, aménagement intérior'
                src={cose}
              />
            </a>
          </div>
        </li>
        <li className='work__row'>
          <div className='work__item' key='1'>
            <a href='http://box5784.temp.domains/~runriotc/'>
              <img className='work__img fg' alt='Food Gorilla' src={runriot} />
            </a>
          </div>
        </li>
        <li className='work__row'>
          <div className='work__item' key='1'>
            <a href='https://unioncowork.com'>
              <img className='work__img' alt='Union Cowork' src={unioncowork} />
            </a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ListWorks
