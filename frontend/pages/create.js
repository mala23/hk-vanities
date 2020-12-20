import React from 'react'
import Link from 'next/link'

import Selection from '../components/selection'
import SelectionControls from '../components/selection-controls'
import Plates from '../components/plates'
import DragPreview from '../components/dragpreview'

const Create = props => (
  <div>
    <DragPreview/>
    <Selection />
    <SelectionControls />
    <Plates />
  </div>
)

export default Create
