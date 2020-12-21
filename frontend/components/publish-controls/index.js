import React, { Component } from 'react'
import Link from 'next/link'

import { StyledControls, StyledControl } from './styles'

const PublishControls = () => (
  <StyledControls>
    {/*
    <Link href="/preview">
      <StyledControl>Preview</StyledControl>
    </Link>
    */}
    <StyledControl>Share</StyledControl>
    <StyledControl>Save</StyledControl>
    {/*
    <StyledControl>Back</StyledControl>
    */}
  </StyledControls>
)

export default PublishControls
