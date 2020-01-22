import styled from 'styled-components'
import media from "styled-media-query"

export const LayoutWrapper = styled.section `
  display: flex;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`

export const LayoutMain = styled.main `
  background: var(--background);
  min-height: 100vh;
  width: 100%;
  padding-left: 17rem;
  padding-right: 3.4rem;

  ${media.lessThan("large")`
    padding: 6rem 0 3rem 0;
  `}

  body[data-display="grid"] & {
    grid-template-areas:
      "posts"
      "pagination";
  }
`