import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1rem .5rem;
`

export const StyledLogo = styled.h1`
  font-family: 'kunst grotesk', 'arial', sans-serif;
  font-size: 2rem;
  line-height: 2rem;
`

export const StyledNav = styled.nav`
  font-size: 2rem;
  letter-spacing: 3px;
  padding: 0rem 1.1rem 0 1.1rem;
  background-color: lightgrey;
  border-radius: 10px;
  margin: 0;
  line-height: 3.5rem;
`

export const StyledNavList = styled.ul`
  display: none;
`

export const StyledNavToggle = styled.div`
  font-size: 2rem;
  letter-spacing: 3px;
  padding: .05rem 1.1rem .5rem 1.1rem;
  background-color: lightgrey;
  border-radius: 10px;
`
