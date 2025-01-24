import { useContext } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeContext } from 'styled-components'

import * as animations from './animations'
import * as S from './styles'

type ThemeTogglerProps = {
  toggleTheme: () => void
}

const ThemeTogglerSwitch = ({ toggleTheme }: ThemeTogglerProps) => {
  const { title } = useContext(ThemeContext)

  const MoonIco = () => (
    <Image
      src="/img/moon-purple.svg"
      blurDataURL="/img/moon-purple.svg"
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
      aria-label="Toggle website theme color"
    >
      <S.SwitchContainer>
        <AnimatePresence initial={false}>
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
        <S.SwitchKnob layout animate={{ x: title === 'light' ? 0 : 55 }} />
      </S.SwitchContainer>
    </S.ThemeTogglerWrapper>
  )
}

export default ThemeTogglerSwitch
