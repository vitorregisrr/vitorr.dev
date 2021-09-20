import styled from 'styled-components'

export const ContactWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 62px;
  margin-bottom: 30px;
  width: 100%;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    padding: 40px 25px 0 25px;
    margin-bottom: 45px;
  }
`

export const ContactSection = styled.div`
  padding: 45px 0;
  text-align: center;
`

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContactLink = styled.a`
  margin: 0 0 25px 0;
  color: ${(props) => props.theme.colors.background_opos};
  text-decoration: none;
  font-size: 2rem;
  transition: all 0.25s ease-in;

  svg,
  path {
    margin-right: 10px;
    transition: all 0.25s ease-in;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};

    svg,
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`
