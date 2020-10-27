import React, { Component } from 'react'
import Link from 'next/link'

import { StyledControls, StyledControl } from './styles'

const SelectionControls = () => (
  <StyledControls>
    <StyledControl>Continue</StyledControl>
    <StyledControl>Reset all</StyledControl>
  </StyledControls>
)

export default SelectionControls
