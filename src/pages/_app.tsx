import { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import { AnimatePresence } from 'framer-motion'
import NProgress from 'nprogress'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import usePersistedState from 'utils/usePersistedState'
import AnimationDirection from 'contexts/globalAnimation'

import LightTheme from 'styles/themes/light'
import DarkTheme from 'styles/themes/dark'
import GlobalStyles from 'styles/global'
import ThemeToggler from 'components/ThemeToggler'
import Sidebar from 'components/Sidebar'
import LanguagesButton from 'components/LanguagesButton'
import DownloadCV from 'components/DownloadCV'
import { useMedia } from 'use-media'

import 'nprogress/nprogress.css'
import MobileNav from 'components/MobileNav'

interface AppPropsEx extends AppProps {
  i18n: any
}

function App({ Component, pageProps, router }: AppPropsEx) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', LightTheme)
  const [isMounted, setMounted] = useState(false)
  const [animationDirection, setAnimationDirection] = useState({
    direction: 'top',
    currentPage: 0
  })
  const isDesktop = useMedia({ minWidth: 1024 })

  useEffect(() => {
    setMounted(true)
  }, [setMounted])

  const toggleTheme = () => {
    setTheme((old) => (old.title === 'light' ? DarkTheme : LightTheme))
  }

  return (
    <ThemeProvider theme={theme}>
      <AnimationDirection.Provider value={animationDirection}>
        <Head>
          <title>Vitor Régis | Freelancer Creative Software Engineer</title>
          <meta
            name="description"
            content="Vitor is a software engineer with over five years of experience in full-stack development and now focused on front-end, web and creative stuff."
          />
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          {/* @ts-ignore */}
          <meta
            property="og:image"
            content="https://www.vitorregis.dev/img/og-image.jpg"
          />
          <meta property="og:image:type" content="image/jpg" />
          <meta
            property="og:title"
            content="Vitorregis.dev | Creative Software Engineer"
          />
          <meta
            property="og:description"
            content="Vitor is a software engineer with over five years of experience in full-stack development and now focused on front-end, web and creative stuff."
          />
          <meta property="og:url" content="https://www.vitorregis.dev" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="VitorRegis.dev" />
          <meta name="twitter:image:alt" content="VitorRegis.dev" />
          <meta name="twitter:site" content="@vitorregisr" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#149A41" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="VitorRegis.dev" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="VitorRegis.dev" />
          <meta
            name="description"
            content="Vitor is a software engineer with over five years of experience in full-stack development and now focused on front-end, web and creative stuff."
          />
        </Head>

        <GlobalStyles />
        <main key={isMounted + '0'}>
          {isDesktop && (
            <>
              <ThemeToggler toggleTheme={toggleTheme} />
              <Sidebar setAnimationDirection={setAnimationDirection} />
              <LanguagesButton />
            </>
          )}

          {!isDesktop && (
            <>
              <MobileNav setAnimationDirection={setAnimationDirection} />
            </>
          )}

          <DownloadCV />

          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component
              {...pageProps}
              setAnimationDirection={setAnimationDirection}
              key={router.route}
            />
          </AnimatePresence>
        </main>
      </AnimationDirection.Provider>
    </ThemeProvider>
  )
}

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false
})

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default App
