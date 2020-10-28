import Link from 'next/link'
import styled from 'styled-components'
import { StyledNav, StyledNavList, StyledNavToggle } from './styles'

const Nav = () => (
  <StyledNav>
    <StyledNavToggle>...</StyledNavToggle>
    <StyledNavList>
      <Link href="/create">
        <a>Create your poem</a>
      </Link>
      <Link href="/see">
        <a>See poems</a>
      </Link>
      <Link href="#">
        <a>Follow</a>
      </Link>
    </StyledNavList>
  </StyledNav>
)

export default Nav
