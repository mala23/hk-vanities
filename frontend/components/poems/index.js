import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import data from '../../data.json'

import { StyledPoems } from './styles'
import Poem from '../poem'

console.log(data.poems)

export default function Poems() {

  return (
    <StyledPoems>
      {data.poems.map((p, i) => (
        <Poem key={i} poem={p} />
      ))}
    </StyledPoems>
  )
}
