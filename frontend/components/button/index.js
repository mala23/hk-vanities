import { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { StyledButton } from './styles'

const Button = (props) => (
  <StyledButton>
  <Link href={props.href}>
    {props.text}
  </Link>
  </StyledButton>
)

export default Button
