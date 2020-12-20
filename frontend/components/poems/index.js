import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { StyledPoems, StyledError, ButtonsContainer, PoemContainer } from './styles'
import Button from '../button'
import Poem from '../poem'

function Poems() {
  const [poems, setPoems] = React.useState([])
  const [error, setError] = React.useState()
  const [cursor, setCursor] = React.useState(0)
  const handlePrev = () => {
    setCursor((i) => Math.max(i - 1, 0))
  }
  const handleNext = () => {
    setCursor((i) => Math.min(i + 1, poems.length))
  }
  React.useEffect(() => {
    fetchPoems().then(
      setPoems,
      (err) => {
        console.error(err)
        setError('Failed to load poems')
      }
    )
  }, [])
  const hasNext = (cursor+1) < poems.length
  const hasPrevious = cursor > 0
  return (
    <StyledPoems>
      {error && (
        <StyledError>{error}</StyledError>
      )}
      <PoemContainer>
        {poems[cursor] && (
          <Poem poem={poems[cursor]} />
        )}
      </PoemContainer>
      <ButtonsContainer>
        <Button button disabled={!hasPrevious} onClick={handlePrev} text='Previous'/>
        <Button button disabled={!hasNext} onClick={handleNext} text='Next'/>
      </ButtonsContainer>
    </StyledPoems>
  )
}

const fetchPoems = async (ctx) => {
  const res = await fetch("/api/gallery")
  if (!res.ok) throw new Error("Server returned an error")
  const body = await res.json()
  return body.poems
}

export default Poems
