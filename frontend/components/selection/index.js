import Link from 'next/link'
import styled from 'styled-components'
import SelectionPlate from '../selection-plate'
import { StyledSelection, StyledSelectionPlates, StyledSelectionImage } from './styles'

export const Selection = () => {
  const movePlate = useCallback((dragIndex, hoverIndex) => {
    const dragPlate = plates[dragIndex]
    setPlates(update(plates, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragPlate],
      ],
    }))
  }, [plates])

  <StyledSelection>
    <StyledSelectionPlates>
      {plates.map((plate, i) => <SelectionPlate/> }
    </StyledSelectionPlates>
  </StyledSelection>
}
