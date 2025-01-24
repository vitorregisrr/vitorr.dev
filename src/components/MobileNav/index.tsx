import Link from 'next/link'
import { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { House, Sparkles, Clock, List, Chat } from 'components/UI/ico'

import * as S from './styles'
import NavToggler from './NavToggler'
import ThemeTogglerSwitch from 'components/ThemeToggler copy'
import LanguagesButton from 'components/LanguagesButton'

type MobileNavProps = {
  setAnimationDirection: any
  toggleTheme: () => void
}

const MobileNav = ({ setAnimationDirection, toggleTheme }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen((prev) => !prev)

  const onLinkClickHandler = (index: number) => {
    setAnimationDirection(index)
    toggleOpen()
  }

  const router = useRouter()
  const { colors } = useContext(ThemeContext)

  const navItems = [
    { label: 'Home', target: '/', Ico: House },
    { label: 'Skills', target: '/skills', Ico: Sparkles },
    { label: 'Experiences', target: '/past-experiences', Ico: Clock },
    { label: 'Portfolio', target: '/portfolio', Ico: List },
    { label: 'Contact', target: '/contact', Ico: Chat }
  ]

  return (
    <>
      <NavToggler toggleOpen={toggleOpen} isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
              className="bubble-menu"
            >
              <S.MobileNavWrapper>
                <S.MobileNavContent>
                  {navItems.map((item, index) => (
                    <S.MobileNavItem
                      onClick={() => onLinkClickHandler(index)}
                      isActive={
                        item.target === '/'
                          ? router.pathname === '/'
                          : router.pathname.includes(item.target)
                      }
                      key={index}
                      aria-label={item.label}
                    >
                      <Link href={item.target} passHref>
                        <item.Ico color={colors.background_opos} />
                        <S.MobileNavItemLabel>
                          {item.label}
                        </S.MobileNavItemLabel>
                      </Link>
                    </S.MobileNavItem>
                  ))}

                  <S.MobileNavItem isActive={false}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 12,
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <S.MobileNavItemLabel style={{ marginTop: 14 }}>
                        Alternar modo
                      </S.MobileNavItemLabel>

                      <ThemeTogglerSwitch toggleTheme={toggleTheme} />
                    </div>
                  </S.MobileNavItem>

                  <S.MobileNavItem isActive={false}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 12,
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <S.MobileNavItemLabel style={{ marginTop: 22 }}>
                        Idioma
                      </S.MobileNavItemLabel>
                      <LanguagesButton hasContainer />
                    </div>
                  </S.MobileNavItem>
                </S.MobileNavContent>
              </S.MobileNavWrapper>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNav
