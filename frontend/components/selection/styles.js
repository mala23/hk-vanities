import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledSelection = styled.section`
  margin: 2rem 0;
`

export const StyledSelectionPlates = styled.section`
  display: flex;
  justify-content: flex-start;
  overflow: auto;
  white-space: nowrap;
`

export const StyledSelectionPlate = styled.article`
  margin: 1rem  1rem 0 0;
`

export const StyledSelectionImage = styled.img`
    width: 100px;
    height: 100px;
    background-color: lightgrey;
`

export const StyledDropZone = styled.div`
  width: calc(((100vw - 5rem) / 2) - .5rem);
  height: calc(((100vw - 5rem) / 2) - .5rem);
  background: ${props => props.active ? 'grey' : 'transparent'};

  @media ${device.laptop} {
    width: calc(((100vw - 5rem) / 4) - 5rem);
    height: calc(((100vw - 5rem) / 4) - 5rem);
  }
`

export const StyledSelectionNote = styled.p`
  position: absolute;
  text-align: center;
  margin: 5rem auto 0 auto;
`
