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
  <h1 className='page-title offset--red'>{props.title}</h1>
)

export default PageHeader
