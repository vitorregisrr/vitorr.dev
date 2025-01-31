import styled from 'styled-components'

export const HomeWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 850px;
  margin: 0 auto;
  padding: 120px 0 146px 0;
  min-height: 100vh;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    padding: 120px 20px 95px 20px;
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
    top: 50%;
    transform: translate(-50%, -50%);

    &.eagle {
      img {
        position: absolute;
        left: 50%;
        top: -190px;
        transform: translateX(-50%);
        width: 125px;

        @media screen and (max-width: 768px) {
          top: -155px;
          width: 90px;
        }
      }
    }

    &.coruja {
      img {
        position: absolute;
        left: 50%;
        top: -170px;
        transform: translateX(-50%);
        width: 155px;

        @media screen and (max-width: 768px) {
          top: -132px;
          width: 134px;
        }
      }
    }
  }

  .background-img {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);

    &.sun {
      img {
        position: absolute;
        left: 50%;
        top: -100px;
        transform: translate(-50%, -50%);
        width: 320px;
        z-index: 1;

        @media screen and (max-width: 768px) {
          width: 240px;
          top: -70px;
        }
      }
    }

    &.moon {
      img {
        position: absolute;
        left: 50%;
        top: -50px;
        width: 270px;
        transform: translate(-50%, -50%);
        z-index: 1;

        @media screen and (max-width: 768px) {
          top: -30px;
          width: 190px;
        }
      }
    }
  }

  .profile-img {
    position: relative;
    z-index: 5;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 140px;
      height: 140px;
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
    font-size: 1.9rem;

    .icon {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    line-height: 1.6;
  }

  .highlight {
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
    text-shadow: 0.2px 0.2px 0px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 768px) {
      font-size: 2.15rem;
      margin-bottom: 0px;
      display: block;
      text-shadow: 0.1px 0.1px 0px rgba(0, 0, 0, 0.1);
    }
  }

  .c-p {
    color: ${(props) => props.theme.colors.primary} !important;
  }

  br {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`

export const HomeCaptionParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.colors.background_opos};
  opacity: 0.9;
  font-size: 2rem;
  line-height: 1.5;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
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
    margin-top: 28px;
    margin-bottom: 18px;
  }
`

export const HomeLinksList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const HomeLinksItem = styled.span`
  margin-left: 10px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: 0.2px 0.2px 0px rgba(0, 0, 0, 0.3);
  text-decoration: underline;
  font-size: 2.4rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    margin-bottom: 16px;
    display: block;
  }
`
