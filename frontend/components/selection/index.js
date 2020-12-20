import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import SelectionPlate from '../selection-plate'
import { StyledSelection, StyledSelectionPlates, StyledSelectionImage, StyledDropZone, StyledSelectionNote, StyledPlaceholderDropZone } from './styles'
import SelectionControls from '../selection-controls'
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
  const handleReset = () => {
    setPlates([])
  }
  const router = useRouter()
  const handleContinue = () => {
    router.push({
      pathname: '/publish',
      query: { plates: plates.map((p) => p.text).join(',') },
    })
  }

  const handleMove = (item, oldIndex, newIndex) => {
    const newPlates = [...plates]
    if (typeof oldIndex === 'number') {
      newPlates.splice(oldIndex, 1)
    }
    newPlates.splice(newIndex, 0, item)
    setPlates(newPlates)
  }

  return (
    <React.Fragment>
      <StyledSelection>
        <StyledSelectionPlates>
          {plates.length ? (
            <React.Fragment>
              {plates.map((plate, i) => (
                <SelectionPlate key={plate.id} index={i} onMove={handleMove} dropable plate={plate}/>
              ))}
              <StyledDropZone innerRef={drop} active={canDrop}/>
            </React.Fragment>
          ) : (
            <StyledPlaceholderDropZone innerRef={drop} active={canDrop}>
              <StyledSelectionNote>{'Drag and drop your selected plates here.'}</StyledSelectionNote>
            </StyledPlaceholderDropZone>
          )}
        </StyledSelectionPlates>
      </StyledSelection>
      <SelectionControls onReset={handleReset} onContinue={handleContinue} />
    </React.Fragment>
  )
}

export default Selection
