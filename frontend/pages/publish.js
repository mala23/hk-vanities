import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Selection from '../components/selection'
import PublishControls from '../components/publish-controls'
import Plates from '../components/plates'
import Poem from '../components/poem'

const Publish = props => {
  const router = useRouter()
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)
  const [url, setUrl] = React.useState(null)
  const plates = (router.query.plates || '').split(',')
  React.useEffect(() => {
    if (!plates.length || !plates[0]) {
      return
    }
    generatePoem(plates).then(
      (url) => {
        setLoading(false)
        setUrl(url)
      },
      (err) => {
        console.error(err)
        setError("Failed to generate poem")
        setLoading(false)
      },
    )
  }, [router.query.plates])
  return (
    <div>
      {error && (
        <ErrorText>
          {error}
        </ErrorText>
      )}
      {loading && (
        'Loading...'
      )}
      {url && (
        <Poem poem={{
          text: plates.join(' '),
          video: url,
        }}/>
      )}
      <Selection />
      <PublishControls />
    </div>
  )
}

const ErrorText = styled.p`
  color: red;
`

const generatePoem = async (plates) => {
  const res = await fetch('/api/video', {
    method: 'POST',
    body: JSON.stringify({ plates }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  if (!res.ok) {
    throw new Error('Failed to generate poem')
  }
  const body = await res.json()
  return body.url
}

export default Publish
