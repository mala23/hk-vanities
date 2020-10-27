import Link from 'next/link'
import styled from 'styled-components'

const StyledSelection = styled.selection`
  .selection {
    margin: 2rem 0;
  }

  .selection-plates {
    display: flex;
    justify-content: flex-start;
    overflow: auto;
    white-space: nowrap;
  }

  .selection-plates-plate {
    margin: 1rem  1rem 0 0;
  }

  .selection img {
    width: 100px;
    height: 100px;
    background-color: lightgrey;
  }
`

const Selection = () => (
  <StyledSelection className="selection">
    <h2>Your selection</h2>
    <section className="selection-plates">
      <article className="selection-plates-plate">
        <figure>
          <img></img>
          <figcaption>Description</figcaption>
        </figure>
      </article>
    </section>
  </StyledSelection>
)

export default Selection
