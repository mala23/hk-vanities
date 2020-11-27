import React from 'react'
import Link from 'next/link'

import Intro from '../components/intro'
import Plates from '../components/plates'
import Button from '../components/button'
import { StyledButton } from './styles'

const Home = props => (
  <div>
    <Intro />
    <StyledButton>
      <Button text="Let's poetise!" href="/create"/>
    </StyledButton>
    <Plates />
  </div>
)

export default Home
