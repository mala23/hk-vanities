import Link from 'next/link'
import styled from 'styled-components'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => {
	NProgress.start();
}
Router.onRouteChangeComplete = () => {
	NProgress.done();
}
Router.onRouteChangeError = () => {
	NProgress.done();
}

const Logo = styled.h1`
`


const StyledHeader = styled.header`
`

const Header = () => (
  <div>header</div>
)

export default Header
