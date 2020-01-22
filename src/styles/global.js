import {createGlobalStyle} from "styled-components"

import reset from './reset'

const GlobalStyles = createGlobalStyle `
${reset}

body{
	font-family: 'Montserrat', sans-serif;

	/* Set variables */

	&.dark{
		--borders: #3844d;
		--texts: #8899a6;
		--postColor: #fff;
		--highlight: #1fa1f2;
		--mediumBackground: #192734;
		--background: #16202c;
		--white: #fff;
		--black: #222;
	}

	&.light{
		--borders: #dedede;
		--postColor: #111;
		--texts: #555555;
		--highlight: #1fa1f2;
		--mediumBackground: #f0f0f33;
		--background: #fff;
		--white: #fff;
	}
}
`

export default GlobalStyles;