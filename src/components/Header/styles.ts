import styled from 'styled-components'

export const MainHeaderWrapper = styled.header`
  width: 100%;
`

type MainHeaderContentProps = {
  align?: string
}

export const MainHeaderContent = styled.div<MainHeaderContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;

  ${(props) =>
    props.align === `center` &&
    `
    justify-content: center;
    align-items: center;
    text-align: center;
  `}
`

export const MainHeaderTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }

  .ico {
    margin-right: 20px;

    @media screen and (max-width: 768px) {
      margin-right: 20px;
    }

    svg,
    path {
      width: 100%;
      transition: all 0.5s ease-in-out;

      @media screen and (max-width: 768px) {
        width: 25px;
      }
    }
  }
`

export const MainHeaderTitle = styled.h2`
  font-size: 3.8rem;
  font-weight: 900;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 2.3rem;
  }
`

export const MainHeaderSubTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`

export const MainHeaderParagraph = styled.p`
  font-size: 1.9rem;
  max-width: 1000px;
  padding-left: 20px;
  line-height: 1.9;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    line-height: 1.8;
    padding-left: 0;
  }
`
