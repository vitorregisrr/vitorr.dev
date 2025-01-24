import styled from 'styled-components'

export const PortfolioWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 62px;
  padding-left: 130px;
  padding-right: 100px;
  padding-bottom: 50px;
  width: 100%;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    padding: 40px 25px 85px 25px;
  }
`

export const PortfolioSection = styled.section`
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    margin-top: 1.8srem;
  }

  .slick-slide {
    padding: 0 10px;
  }

  .slick-dots {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0;
    list-style: none;
    width: 100%;
    margin-top: 10px;
    z-index: 4;

    button {
      width: 15px;
      height: 15px;
      padding: 0;
      border-radius: 50%;
      margin: 0 13px;
      background-color: ${(props) => props.theme.colors.primary};
      color: rgba(250, 250, 250, 0);
      opacity: 0.6;

      &:before {
        display: none;
      }
    }

    .slick-active {
      button {
        opacity: 1;
        background-color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`

export const PortfolioSectionTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  margin-top: 5rem;
  margin-bottom: 1.8rem;
  opacity: 0.8;

  @media screen and (max-width: 768px) {
    font-size: 1.9rem;
    margin-bottom: 2rem;
    margin-top: 3.5rem;

    svg {
      width: 28px;
    }
  }

  svg {
    margin-right: 6px;
  }
`
