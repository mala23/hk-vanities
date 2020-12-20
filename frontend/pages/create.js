import React from 'react'
import Link from 'next/link'

import Selection from '../components/selection'
import Plates from '../components/plates'
import DragPreview from '../components/dragpreview'

const Create = props => (
  <div>
    <DragPreview/>
    <Selection />
    <Plates />
  </div>
)

export default Create
