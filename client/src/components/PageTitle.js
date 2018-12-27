/* PageTitle.js
 *
 * @author Mikal Callahan
 * @version a-0.0.1
 */

import React from 'react'

/* PageHeader Component
 *
 * @params props
 * @returns PageHeader
 */

const PageHeader = props => (
  <span className='page-title'>
    <h1 className='offset--red'>{props.title}</h1>
  </span>
)

export default PageHeader
