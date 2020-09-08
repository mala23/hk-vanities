import React, { Component } from 'react'
import Header from '../header/'
import Nav from '../nav/'
import styled from 'styled-components'

const StyledPage = styled.div`
  background: white;
`

class Page extends Component {
	render() {
		return (
			<StyledPage>
        <Header />
        <Nav />
				{this.props.children}
			</StyledPage>
		)
	}
}

export default Page
