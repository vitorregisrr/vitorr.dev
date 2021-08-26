import { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import ThemeToggler from 'components/ThemeToggler'
import { AnimatePresence } from 'framer-motion'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import usePersistedState from 'utils/usePersistedState'

import LightTheme from 'styles/themes/light'
import DarkTheme from 'styles/themes/dark'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps, router }: AppProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', LightTheme)
  const [isMounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [setMounted])

  const toggleTheme = () => {
    setTheme((old) => (old.title === 'light' ? DarkTheme : LightTheme))
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Vitorr.dev • Creative Software Engineer</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content={theme.colors.background} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Vitorr.dev • Creative Software Engineer"
        />
        <meta
          name="description"
          content="Vitor is a software engineer with almost five years of experience developing front-end and back-end and now focused on front-end, web and creative stuff. I also have experience with management 
          of international teams as a tech leader and trusts in giving he better to every place/project I am in! ✨"
        />
      </Head>

      <GlobalStyles />
      <main>
        <ThemeToggler key={isMounted + '0'} toggleTheme={toggleTheme} />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </main>
    </ThemeProvider>
  )
}

export default App
