import * as React from 'react'
import { Preview } from 'react-dnd-multi-backend';
import styled from 'styled-components'

const StyledImage = styled.img`
  width: calc(((100vw - 5rem) / 2) - .5rem);
  height: calc(((100vw - 5rem) / 2) - .5rem);
`

const DragPreview = ({}) => (
  <Preview>
    {({ item, style }) => (
      <StyledImage src={item.value.image} style={style}/>
    )}
  </Preview>
)

export default DragPreview
