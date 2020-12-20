import App, { Container  } from 'next/app'
import Page from '../components/page/'
import React from 'react'
import { TouchBackend } from 'react-dnd-touch-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider  } from 'react-dnd-multi-backend'
import HTML5ToTouch from 'react-dnd-multi-backend/dist/cjs/HTML5toTouch'

class MyApp extends App {
  render() {
    const { Component  } = this.props

    return (
      <Container>
        <Page>
          <DndProvider options={HTML5ToTouch}>
            <Component />
          </DndProvider>
        </Page>
      </Container>
    )
  }
}

export default MyApp
