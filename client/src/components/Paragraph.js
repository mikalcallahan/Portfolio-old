/* Paragraph
 *
 * @author Mikal Callahan
 * @version a-0.0.1
 */
import React from 'react'

/* Paragraph
 *
 * @params props
 * @returns Paragraph
 */
const Paragraph = props => (
  <div className={props.className}> <p className={props.size}> {props.paragraph} </p> </div>
)

export default Paragraph
