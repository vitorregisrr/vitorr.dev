import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      terc: string
      background: string
      background_opos: string
      text: string
    }
  }
}
