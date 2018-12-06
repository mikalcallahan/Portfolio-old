/* Project.js
 *
 * @author Mikal Callahan
 * @version a-0.0.1
 */

import React from 'react'

/* Project Component
 *
 * Used to return the work list
 * @params props
 * @returns unordered list of projects I have done
 */
export default function Project(props) {
  let projectList = props.project.map(project => (
    <li className='projects-list__project' key={project.key}>
      <div className='left'>
        {project.name}
        {project.role}
        {project.desc}
      </div>
      <div className='right'>
        <img src={project.img.src} alt={project.name} />
      </div>
    </li>
  ))
  return <ul>{projectList}</ul>
}
