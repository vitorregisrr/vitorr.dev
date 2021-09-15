import styled from 'styled-components'

export const HomeWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 850px;
  margin: 0 auto;
  padding-top: 30px;
`

export const HomeImage = styled.div`
  position: relative;
  transition: margin 0.45s;

  ${(props) =>
    props.theme.title === 'dark' &&
    `
        margin-bottom: 30px;
    `}

  .top-img {
    position: absolute;
    left: 50%;
    top: -50px;
    transform: translateX(-50%);

    &.eagle {
      width: 125px;
      top: -85px;
    }

    &.coruja {
      width: 155px;
      top: -60px;
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
    }

    &.moon {
      width: 270px;
      z-index: 1;
      top: 75%;
    }
  }

  .profile-img {
    position: relative;
    z-index: 5;
    width: 200px;
  }
`

export const HomeCaption = styled.div`
  text-align: center;
  padding-top: 50px;
`

export const HomeCaptionTitle = styled.h1`
  font-size: 33px;
  color: ${(props) => props.theme.colors.background_opos};
  font-weight: 400;

  .highlight {
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
    display: inline-block;
    margin-left: 10px;
  }
`

export const HomeCaptionParagraph = styled.p`
  font-family: 'Roboto';
  color: #7d7d7d;
  font-size: 19px;
  margin-top: 20px;
`

export const HomeLinks = styled.div``

export const HomeLinksTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.background_opos};
`

export const HomeLinksList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`

export const HomeLinksItem = styled.a`
  margin-left: 10px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: underline;
  font-size: 23px;
  cursor: pointer;
`
