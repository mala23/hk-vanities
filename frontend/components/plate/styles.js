import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledPlate = styled.article`
  margin: 1rem 0 0 0;
  cursor: pointer;
`

export const StyledPlateFigure = styled.figure`
  margin: 0;
`

export const StyledPlateImage = styled.img`
  width: calc(((100vw - 5rem) / 2) - 1rem);
  height: calc(((100vw - 5rem) / 2) - 1rem);
  background-color: lightgrey;
  object-fit: cover;

  @media ${device.laptop} {
    max-width: 300px;
    max-height: 300px;
    width: calc(((100vw - 20rem) / 4) - 2rem);
    height: calc(((100vw - 20rem) / 4) - 2rem);
  }

  &:hover {
    outline: .5rem solid hsl(46, 100%, 50%);
  }
`

export const StyledPlateCaption = styled.figcaption`
  text-transform: uppercase;
  letter-spacing: .6px;
`
