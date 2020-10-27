import Nav from '../../components/nav/'
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

  header__Logo {
    margin: 0;
    background-color: salmon;
  }

	a {
    font-family: 'kunst grotesk', 'arial', sans-serif;
    font-size: 2rem;
    margin: 0;
	}
`


const StyledHeader = styled.header`
  .bar {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1rem .5rem;
    vertical-align: center;
	}

  .nav-toggle {
    font-size: 2rem;
    letter-spacing: 3px;
    padding: .05rem 1.1rem .5rem 1.1rem;
    background-color: lightgrey;
    border-radius: 10px;
  }

  .top-nav {
    display: none;
    font-family: 'kunst grotesk', 'arial', sans-serif;
  }
`

const Header = () => (
	<StyledHeader>
		<div className="bar">
			<Logo>
				<Link href="/">
					<a>HK Vanities</a>
				</Link>
			</Logo>
      <div><a className="nav-toggle" href="#">...</a></div>
      <nav className="top-nav">
        <ul>
          <li><a href="/create">Create your Poem</a></li>
          <li><a href="/poems">Poems</a></li>
          <li><a href="/follow">Follow</a></li>
        </ul>
      </nav>
    </div>
	</StyledHeader>
)

export default Header
