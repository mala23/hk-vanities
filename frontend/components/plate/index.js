import Link from 'next/link'
import styled from 'styled-components'
import { StyledPlate, StyledPlateFigure, StyledPlateImage, StyledPlateCaption } from './styles'

const Plate = ({ plate }) => (
  <StyledPlate>
    <StyledPlateFigure>
      <StyledPlateImage src={plate.image} alt={plate.text} />
      <StyledPlateCaption>{plate.text}</StyledPlateCaption>
    </StyledPlateFigure>
  </StyledPlate>
)

export default Plate
