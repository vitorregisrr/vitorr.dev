import styled from 'styled-components'

export const MainHeaderWrapper = styled.header`
  width: 100%;
`

export const MainHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`

export const MainHeaderTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .ico {
    margin-right: 20px;

    svg,
    path {
      width: 100%;
      transition: all 0.5s ease-in-out;
    }
  }
`

export const MainHeaderTitle = styled.h2`
  font-size: 3.8rem;
  font-weight: 900;
  text-transform: uppercase;
`

export const MainHeaderSubTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 400;
`

export const MainHeaderParagraph = styled.p`
  font-size: 1.9rem;
  max-width: 1000px;
  padding-left: 20px;
  line-height: 1.9;
`
