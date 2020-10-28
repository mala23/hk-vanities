import Link from 'next/link'
import styled from 'styled-components'
import NProgress from 'nprogress'
import Router from 'next/router'
import Nav from '../nav'
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
    <Link href="/">
    <StyledLogo>HKVANIT1ES</StyledLogo>
    </Link>
    <Nav />
  </StyledHeader>
)

export default Header
