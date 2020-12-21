import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledSelectionPlate = styled.article`
  margin: 1rem 2rem 0 0;
  cursor: pointer;
`

export const StyledSelectionImage = styled.img`
  width: 5rem;
  height: 5rem;
  background-color: lightgrey;
  object-fit: cover;

  @media ${device.laptop} {
    width: calc(((100vw - 5rem) / 4) - 5rem);
    height: calc(((100vw - 5rem) / 4) - 5rem);
    max-width: 10rem;
    max-height: 10rem;
  }
`
export const StyledSelectionCaption = styled.figcaption`
  text-transform: uppercase;
`
