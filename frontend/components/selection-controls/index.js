import React, { Component } from 'react'
import Link from 'next/link'

import { StyledControls, StyledControl } from './styles'

const SelectionControls = () => (
  <StyledControls>
    <Link href="/publish">
      <StyledControl>Continue</StyledControl>
    </Link>
    <StyledControl>Reset all</StyledControl>
  </StyledControls>
)

export default SelectionControls
