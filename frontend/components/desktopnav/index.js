import { Component } from 'react'
import Link from 'next/link'
import { StyledMenu, StyledLink, StyledA } from './styles'

const DesktopNav = () => (
  <StyledMenu>
    <StyledA>
    <Link href="/create">
      Create your poem
    </Link>
    </StyledA>
    <StyledA>
    <Link href="/see">
      See poems
    </Link>
    </StyledA>
    <StyledA>
    <Link href="#">
      Follow
    </Link>
    </StyledA>
  </StyledMenu>
)

export default DesktopNav
