import Link from 'next/link'
import styled from 'styled-components'
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../../lib/ItemTypes';
import { StyledSelectionPlate, StyledSelectionImage } from './styles'

const SelctionPlate = ({ index, plate, onMove }) => {
  const ref = React.useRef()
  const [, drop] = useDrop({
    accept: 'plate',
    drop: (item) => {
      onMove(item.value, item.index, index)
    },
  })
  const [, drag] = useDrag({
    item: {
      index: index,
      id: plate.image,
      value: plate,
      type: 'plate',
    },
  })
  drop(drag(ref))
  return (
    <StyledSelectionPlate innerRef={ref}>
      <StyledSelectionImage src={plate.image} alt={plate.text}/>
    </StyledSelectionPlate>
  )
}

export default SelctionPlate
