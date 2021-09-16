import styled from 'styled-components'

export const HomeWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 850px;
  margin: 0 auto;
  padding-top: 30px;

  @media screen and (max-width: 768px) {
    padding: 90px 20px 0 20px;
    margin-bottom: 95px;
  }
`

export const HomeImage = styled.div`
  position: relative;
  transition: margin 0.45s;

  ${(props) =>
    props.theme.title === 'dark' &&
    `
        margin-bottom: 30px;

        @media screen and (max-width: 768px) {
          margin-bottom: 10px;
        }
    `}

  .top-img {
    position: absolute;
    left: 50%;
    top: -50px;
    transform: translateX(-50%);

    &.eagle {
      width: 125px;
      top: -85px;

      @media screen and (max-width: 768px) {
        top: -73px;
        width: 100px;
      }
    }

    &.coruja {
      width: 155px;
      top: -60px;

      @media screen and (max-width: 768px) {
        width: 145px;
      }
    }
  }

  .background-img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &.sun {
      width: 320px;
      z-index: 1;

      @media screen and (max-width: 768px) {
        width: 220px;
      }
    }

    &.moon {
      width: 270px;
      z-index: 1;
      top: 75%;

      @media screen and (max-width: 768px) {
        width: 190px;
      }
    }
  }

  .profile-img {
    position: relative;
    z-index: 5;
    width: 200px;

    @media screen and (max-width: 768px) {
      width: 140px;
    }
  }
`

export const HomeCaption = styled.div`
  text-align: center;
  padding-top: 50px;
`

export const HomeCaptionTitle = styled.h1`
  font-size: 3.6rem;
  color: ${(props) => props.theme.colors.background_opos};
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }

  .highlight {
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
    display: inline;
  }
`

export const HomeCaptionParagraph = styled.p`
  font-family: 'Roboto';
  color: #7d7d7d;
  font-size: 2rem;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`

export const HomeLinks = styled.div``

export const HomeLinksTitle = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.background_opos};

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`

export const HomeLinksList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
`

export const HomeLinksItem = styled.a`
  margin-left: 10px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: underline;
  font-size: 2.4rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 1.9rem;
    margin-bottom: 10px;
  }
`
