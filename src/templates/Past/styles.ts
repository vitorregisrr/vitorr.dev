import styled from 'styled-components'

export const PastWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 62px;
  padding-left: 130px;
  padding-right: 230px;
  padding-bottom: 30px;
  width: 100%;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    padding: 40px 25px 40px 25px;
  }
`

export const PastSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0 40px 0;
  padding-left: 90px;
  max-width: 800px;

  &::after {
    content: '';
    position: absolute;
    top: 3.5%;
    left: 40px;
    width: 3px;
    border-radius: 10px;
    height: 91%;
    background-color: ${(props) => props.theme.colors.background_opos};
    transition: all 0.45s ease-in;

    @media screen and (max-width: 768px) {
      left: 2px;
      width: 3px;
      top: 1%;
      height: 95%;
    }
  }

  @media screen and (max-width: 768px) {
    padding-left: 34px;
  }
`

export const PastParagraph = styled.div`
  padding-top: 20px;

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }

  p {
    position: relative;
    font-size: 1.6rem;
    margin-bottom: 40px;
    line-height: 1.6;

    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }

    &::after {
      content: '';
      position: absolute;
      left: -58px;
      top: 3px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.background_opos};
      transition: all 0.45s ease-in;

      @media screen and (max-width: 768px) {
        top: 6px;
        left: -40px;
        width: 19px;
        height: 19px;
      }
    }
  }

  b {
    font-size: 1.9rem;
    display: block;
    margin-bottom: 5px;

    @media screen and (max-width: 768px) {
      font-size: 1.7rem;
    }
  }
`
