import styled from 'styled-components'
import { device } from '../../lib/device'

const size = '5rem'

export const StyledSelection = styled.section`
  margin: 2rem 0;
`

export const StyledSelectionPlates = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
    @media ${device.laptop} {
      max-height: 20vh;
      overflow: scroll;
    }
`

export const StyledSelectionPlate = styled.article`
  margin: 1rem  1rem 0 0;
`

export const StyledDropZone = styled.div`
  width: calc(((100vw - 5rem) / 4) - 5rem);
  height: calc(((100vw - 5rem) / 4) - 5rem);
  max-width: 10rem;
  max-height: 10rem;
  background: ${props => props.active ? 'grey' : 'transparent'};

  @media ${device.laptop} {
    width: calc(((100vw - 5rem) / 4) - 5rem);
    height: calc(((100vw - 5rem) / 4) - 5rem);
    max-width: 10rem;
    max-height: 10rem;
  }
`

export const StyledPlaceholderDropZone = styled.div`
`

export const StyledSelectionNote = styled.p`
  text-align: center;
`
