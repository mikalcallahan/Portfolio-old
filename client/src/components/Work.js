import React from 'react'

function Work(props) {
  let workList = props.project.map(project => (
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
  return <ul>{workList}</ul>
}

export default Work
