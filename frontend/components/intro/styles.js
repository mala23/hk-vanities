import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledIntro = styled.p`
  margin: 0 0 2rem 0;

  @media ${device.laptop} {
    font-size: 2rem;
    line-height: 3.6rem;
    letter-spacing: .2px;
    margin: 0 auto 4rem auto;
    max-width: 600px;
  }
`

