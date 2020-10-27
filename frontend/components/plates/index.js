import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { StyledPlates } from './styles'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Plate from '../plate'
//import Pagination from '../pagination'
//import { perPage } from '../../config'

/*
const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      image
    }
  }
`
*/

const ALL_PLATES_QUERY = gql`
  query {
    plate {
      id
      title
      image
    }
  }
`

class Plates extends Component {
  render() {
    return (
      <Query
        query={ALL_PLATES_QUERY}
      >
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>
          return (
            <PlatesList>{data.plates.map(plate => <Plate plate={plate} key={plate.id} />)}</PlatesList>
          )
        }}
      </Query>
    )
  } 
}

export default Plates
export { ALL_PLATES_QUERY }
