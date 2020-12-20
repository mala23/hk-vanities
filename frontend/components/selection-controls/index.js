import React, { Component } from 'react'
import Link from 'next/link'

import { StyledControls, StyledControl } from './styles'

const SelectionControls = ({ onContinue, onReset }) => (
  <StyledControls>
    <StyledControl button onClick={onContinue}>Continue</StyledControl>
    <StyledControl onClick={onReset}>Reset all</StyledControl>
  </StyledControls>
)

export default SelectionControls
