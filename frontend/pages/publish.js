import React from 'react'
import Link from 'next/link'

import Selection from '../components/selection'
import PublishControls from '../components/publish-controls'
import Plates from '../components/plates'

const Publish = props => (
  <div>
    <Selection />
    <PublishControls />
    <Plates />
  </div>
)

export default Publish
