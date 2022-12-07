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
import Sidebar from 'components/Sidebar'
import LanguagesButton from 'components/LanguagesButton'
interface AppPropsEx extends AppProps {
  i18n: any
}

function App({ Component, pageProps, router }: AppPropsEx) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', DarkTheme)
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
        <title>Vitorr.dev | Creative Software Engineer</title>
        <meta
          name="description"
          content="Vitor is a software engineer with over five years of experience in full-stack development and now focused on front-end, web and creative stuff."
        />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        {/* @ts-ignore */}
        <meta
          property="og:image"
          content="https://www.vitorr.dev/img/logo-vitorrdev.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta
          property="og:title"
          content="Vitorr.dev | Creative Software Engineer"
        />
        <meta
          property="og:description"
          content="Vitor is a software engineer with over five years of experience in full-stack development and now focused on front-end, web and creative stuff."
        />
        <meta property="og:url" content="https://www.vitorr.dev" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Vitorr.dev" />
        <meta name="twitter:image:alt" content="Vitorr.dev" />
        <meta name="twitter:site" content="@vitorregisr" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#149A41" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Vitorr.dev" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Vitorr.dev" />
        <meta
          name="description"
          content="Vitor is a software engineer with over five years of experience in full-stack development and now focused on front-end, web and creative stuff."
        />
        <script>{`var pageAnimationDirection="left";`}</script>
      </Head>

      <GlobalStyles />
      <main key={isMounted + '0'}>
        <ThemeToggler toggleTheme={toggleTheme} />
        <Sidebar />
        <LanguagesButton />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </main>
    </ThemeProvider>
  )
}

export default App
