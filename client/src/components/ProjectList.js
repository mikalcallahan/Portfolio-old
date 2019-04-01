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
    src: {bhArt},
  }
]

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
          <img className='work__img' alt='Cosé, aménagement intérior' src={cose}/>
        </div>
      </li>
      <li className='work__row'>
         <div className='work__item' key='1'>
           <img className='work__img fg' alt='Food Gorilla' src={foodgorilla}/>
        </div>
      </li>
      <li className='work__row'>
        <div className='work__item' key='1'>
          <img className='work__img' alt='Bettina Heinz Art' src={bhArt}/>
        </div>
      </li>
      </ul>
    </div>
  )
}

export default ListWorks
