import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import data from '../../data/platesData.json'

import { StyledPlates } from './styles'
import Plate from '../plate'

export default function Plates() {

  return (
    <StyledPlates>
      {data.map((p, i) => (
        <Plate key={i} plate={p} />
      ))}
    </StyledPlates>
  )
}
