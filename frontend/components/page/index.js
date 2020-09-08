import React, { Component } from 'react'
import Header from '../header/'
import Meta from '../meta/'
import styled from 'styled-components'
import Styles from '../page/'

class Page extends Component {
	render() {
		return (
			<Page>
				<Meta />
				<Header />
				{this.props.children}
			</Page>
		)
	}
}

export default Page
