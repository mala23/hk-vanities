import Link from 'next/link'
import styled from 'styled-components'
import { StyledPlate, StyledPlateFigure, StyledPlateImage, StyledPlateCaption } from './styles'
import { useDrag } from 'react-dnd'

const Plate = ({ plate }) => {
  const [, drag] = useDrag({
    item: {
      id: plate.image,
      value: plate,
      type: 'plate',
    },
  })

  return (
    <StyledPlate innerRef={drag}>
      <StyledPlateFigure>
        <StyledPlateImage src={plate.image} alt={plate.text} />
        <StyledPlateCaption>{plate.text}</StyledPlateCaption>
      </StyledPlateFigure>
    </StyledPlate>
  )
}

export default Plate
