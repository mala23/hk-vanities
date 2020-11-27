import App, { Container  } from 'next/app'
import Page from '../components/page/'
import React from 'react'
import { DndProvider  } from 'react-dnd'
import { HTML5Backend  } from 'react-dnd-html5-backend'

class MyApp extends App {
  render() {
    const { Component  } = this.props

    return (
      <Container>
        <Page>
          <DndProvider backend={HTML5Backend}>
            <Component />
          </DndProvider>
        </Page>
      </Container>
    )
  }
}

export default MyApp
