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
	font-size: 3rem;
	margin-left: 1rem;
	margin-top: 2rem;
	margin-bottom: 4rem;
	position: relative;
	z-indexd: 2;

	a {
		font-family: 'Charles Wright Bold', sans-serif;
		color: ${props => props.theme.black};
		text-decoration: none;
		text-transform: uppercase;
		padding: 1rem;
		border: .6rem solid ${props => props.theme.black};
		border-radius: .6rem;
		background: ${props => props.theme.yellow};
	}

	@media (max-width: 1300px) {
		margin: 2rem 0;
		text-align: center;
	}
`


const StyledHeader = styled.header`
	.bar {
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;

		@media (max-width: 1300px) {
			grid-template-columns: 1fr;
			justify-content: center;
		}
	}

	.sub-bar {
		display: grid;
		display: none;
		grid-template-columns: 1fr auto;
		border-bottom: 1px solid ${props => props.theme.lightgrey};
	}
`

const Header = () => (
	<StyledHeader>
		<div className="bar">
			<Logo>
				<Link href="/">
					<a>Hon6 Kon6 Vani7ies</a>
				</Link>
			</Logo>
			<Nav />
		</div>
		<div className="sub-bar">
			<p>Search</p>
		</div>
	</StyledHeader>
)

export default Header
