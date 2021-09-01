import { useContext } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeContext } from 'styled-components'

import * as animations from './animations'
import * as S from './styles'

type ThemeTogglerProps = {
  toggleTheme: () => void
}

const ThemeToggler = ({ toggleTheme }: ThemeTogglerProps) => {
  const { title } = useContext(ThemeContext)

  const MoonIco = () => (
    <Image
      src="/img/moon.svg"
      blurDataURL="/img/moon.svg"
      alt="Moon icon"
      placeholder="blur"
      height={60}
      width={60}
    />
  )
  const SunIco = () => (
    <Image
      src="/img/sun2.svg"
      blurDataURL="/img/sun2.svg"
      placeholder="blur"
      alt="Sun icon"
      height={60}
      width={60}
    />
  )

  return (
    <S.ThemeTogglerWrapper
      onClick={toggleTheme}
      aria-label="Toggle website theme Color"
    >
      <S.ThemeTogglerIcon>
        <AnimatePresence>
          {title === 'light' ? (
            <motion.div className="ico moon" key="moon" {...animations.icon}>
              <MoonIco />
            </motion.div>
          ) : (
            <motion.div className="ico sun" key="sun" {...animations.icon}>
              <SunIco />
            </motion.div>
          )}
        </AnimatePresence>
      </S.ThemeTogglerIcon>
    </S.ThemeTogglerWrapper>
  )
}

export default ThemeToggler
