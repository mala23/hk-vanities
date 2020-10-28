import Link from 'next/link'
import styled from 'styled-components'

const Plate = ({ plate }) => (
  <article>
    <figure>
      <img src={plate.image} alt={plate.text} />
      <figcaption>{plate.text}</figcaption>
    </figure>
  </article>
)

export default Plate
