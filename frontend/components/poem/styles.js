import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledPoem = styled.video`
  width: calc(((100vw - 5rem) / 2) - .5rem);
  height: auto;
  background-color: lightgrey;
  bottom: 0;
  margin: 0 0 2rem 0;

  @media ${device.laptop} {
    width: calc(((100vw - 5rem) / 4) - 5rem);
    height: calc(((100vw - 5rem) / 4) - 5rem);
  }
`
