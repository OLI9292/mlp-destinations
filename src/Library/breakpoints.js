import { css } from 'styled-components'

export const PHONE_MAX_WIDTH = 850

export const media = {
  phone: (...args) => css`
    @media (max-width: ${PHONE_MAX_WIDTH}px) {
      ${ css(...args) }
    }
  `
}
