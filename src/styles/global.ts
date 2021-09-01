import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Merriweather', serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.background_opos};
    transition: background-color 0.5s ease-in-out;

    --c-l-primary: #FFC117;
    --c-l-secondary: #FFD768;
    --c-l-terc: #FFDF87;
    --c-l-light: #FFF9F0;
    --c-l-dark: #190122;
    --c-l-dark-2: #320B41;
    --c-l-text: #190122;
  
    --c-d-primary: #D9B6FF;
    --c-d-secondary: #2B1533;
    --c-d-terc: #2B1533;
    --c-d-light: #2B1533;
    --c-d-dark: #190122;
    --c-d-dark-2: #320B41;
    --c-d-text: #FFFFFF;
  }
`

export default GlobalStyles
