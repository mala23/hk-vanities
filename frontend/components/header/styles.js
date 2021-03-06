import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1rem .5rem;

  @media ${device.laptop} {
    margin: 3rem 3rem;
  }
`

export const StyledLogo = styled.a`
  font-family: 'kunst grotesk', 'arial', sans-serif;
  font-size: 2rem;
  line-height: 2rem;
  padding: 1rem;
  cursor: pointer;
  z-index: 1500;
  letter-spacing: 1px;

  @media ${device.laptop} {
    font-size: 4rem;
  }
`
