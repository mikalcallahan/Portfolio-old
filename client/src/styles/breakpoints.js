import { css } from 'styled-components'

const sizes = {
  xlarge: 1680,
  large: 1280,
  medium: 900,
  small: 736,
  xsmall: 480,
}

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})
