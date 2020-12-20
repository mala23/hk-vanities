import React, { Component } from 'react'
import Link from 'next/link'

import { StyledControls, StyledControl } from './styles'

const SelectionControls = ({ onReset }) => (
  <StyledControls>
    <Link href="/publish">
      <StyledControl>Continue</StyledControl>
    </Link>
    <StyledControl onClick={onReset}>Reset all</StyledControl>
  </StyledControls>
)

export default SelectionControls
