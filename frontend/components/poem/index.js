import Link from 'next/link'
import styled from 'styled-components'
import { StyledPoem } from './styles'

const Poem = ({ poem }) => {

  return (
    <StyledPoem autoPlay muted loop id={poem.text}>
      <source src={poem.video} type="video/mp4"/>
      Your browser does not support HTML5 video.
    </StyledPoem>
  )

}

export default Poem
