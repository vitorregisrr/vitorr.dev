import {createGlobalStyle} from "styled-components"

import reset from './reset'

const GlobalStyles = createGlobalStyle `
${reset}

body{
	font-family: 'Montserrat', sans-serif;

	/* Set variables */

	--borders: #3844d;
	--texts: 8899a6;
	--postColor: #fff;
	--highlight: #1fa1f2;
	--mediumBackground: #192734;
	--background: #16202c;
	--white: #fff;
	--black: #222;
}
`

export default GlobalStyles;