import { Component } from 'react'
import styled from 'styled-components'

import Selection from '../selection'
import SelectionControls from '../selection-controls'
import DragPreview from '../dragpreview'

import { StyledComposer } from './styles'

const Composer = () => (
  <StyledComposer>
    <DragPreview />
    <Selection />
  </StyledComposer>
)

export default Composer
