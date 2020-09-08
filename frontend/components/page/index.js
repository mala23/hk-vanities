import React, { Component } from 'react'
import Header from '../header/'
import Meta from '../meta/'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

const theme = {
	red: '#FF0000',
	yellow: 'hsl(50, 96%, 65%, 100%)',
	black: 'hsl(50, 3%, 3%, 100%)',
	grey: '#3A3A3A',
	lightgrey: '#E1E1E1',
	offWhite: '#EDEDED',
	maxWidth: '1000px',
  	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
	background: white;
	color: ${props => props.theme.black};
`

const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
`

injectGlobal`
	@font-face {
		font-family: 'Charles Wright Bold';
		src: url('/static/CharlesWright-Bold.woff2')
		format('woff2');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'Open Sans Regular';
		src: url('/static/OpenSans-Regular.woff2')
		format('woff2');
		font-weight: normal;
		font-style: normal;

	}
	html {
		box-sizing: border-box;
		font-size: 10px;
	}
	*, *.before, *.after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		font-family: 'Open Sans Regular', sans-serif;
		font-size: 1.5rem;
		line-height: 2;
	}
	a {
		text-decoration: none;
		color: ${theme.black};
`

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
			<StyledPage>
				<Meta />
				<Header />
				<Inner>
					{this.props.children}
				</Inner>
			</StyledPage>
			</ThemeProvider>
		)
	}
}

export default Page
