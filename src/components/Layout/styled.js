import styled from 'styled-components'

export const LayoutWrapper = styled.section `
  display: flex;

  @media screen and (max-width: 1200px){
        flex-direction: column;
    }
`

export const LayoutMain = styled.main `
  background: var(--background);
  min-height: 100vh;
  width: 100%;
  padding-left: 17rem;
  padding-right: 3.4rem;
`