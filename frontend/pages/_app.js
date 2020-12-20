import App, { Container  } from 'next/app'
import Page from '../components/page/'
import React from 'react'
import { DndProvider  } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'

class MyApp extends App {
  render() {
    const { Component  } = this.props

    return (
      <Container>
        <Page>
          <DndProvider backend={TouchBackend}>
            <Component />
          </DndProvider>
        </Page>
      </Container>
    )
  }
}

export default MyApp
