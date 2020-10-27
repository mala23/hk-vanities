import Link from 'next/link'
import styled from 'styled-components'
import NProgress from 'nprogress'
import Router from 'next/router'
import { StyledHeader, StyledLogo, StyledNav, StyledNavList, StyledNavToggle } from './styles'

Router.onRouteChangeStart = () => {
    NProgress.start();
}
Router.onRouteChangeComplete = () => {
    NProgress.done();
}

Router.onRouteChangeError = () => {
    NProgress.done();
}

const Header = () => (
  <StyledHeader>
      <StyledLogo>HKVANIT1ES</StyledLogo>
      <StyledNav>
        <StyledNavToggle>...</StyledNavToggle>
        <StyledNavList>
          <li><a href="/create">Create your Poem</a></li>
          <li><a href="/poems">See Poems</a></li>
          <li><a href="#">Follow</a></li>
        </StyledNavList>
      </StyledNav>
  </StyledHeader>
)

export default Header
