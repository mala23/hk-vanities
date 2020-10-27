import React from 'react'
import Link from 'next/link'

import Selection from '../components/selection'
import SelectionControls from '../components/selection-controls'
import Plates from '../components/plates'

const Create = props => (
  <div>
    <Selection />
    <SelectionControls />
    <Plates />
  </div>
)

export default Create
