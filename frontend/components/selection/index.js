import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import SelectionPlate from '../selection-plate'
import { StyledSelection, StyledSelectionPlates, StyledSelectionImage, StyledDropZone } from './styles'
import { useDrop } from 'react-dnd'
import { v4 as uuid } from 'uuid'

const Selection  = () => {
  const [plates, setPlates] = React.useState([])
  const [{ canDrop }, drop] = useDrop({
    accept: 'plate',
    drop: (item) => {
      if (item.value.id) return
      setPlates([
        ...plates,
        {
          id: uuid(),
          ...item.value,
        }
      ])
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    })
  })

  const handleMove = (item, oldIndex, newIndex) => {
    const newPlates = [...plates]
    if (typeof oldIndex === 'number') {
      newPlates.splice(oldIndex, 1)
    }
    newPlates.splice(newIndex, 0, item)
    setPlates(newPlates)
  }

  return (
    <StyledSelection>
      <StyledSelectionPlates>
        {plates.map((plate, i) => (
          <SelectionPlate key={plate.id} index={i} onMove={handleMove} dropable plate={plate}/>
        ))}
        <StyledDropZone innerRef={drop} active={canDrop}/>
      </StyledSelectionPlates>
    </StyledSelection>
  )
}

export default Selection
