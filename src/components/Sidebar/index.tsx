import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { House, Sparkles, Clock, List, Chat } from 'components/UI/ico'

import * as S from './styles'

type i18nProps = {
  home_label: string
  skills_label: string
  experiences_label: string
  contact_label: string
  portfolio_label: string
}

type SidebarProps = {
  setAnimationDirection: any
}

const Sidebar = ({ setAnimationDirection }: SidebarProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const router = useRouter()
  const { colors } = useContext(ThemeContext)
  const i18n: i18nProps = {
    home_label: `home`,
    skills_label: `skills/knowledge`,
    experiences_label: `past experiences`,
    contact_label: `contact`,
    portfolio_label: `portfolio`
  }

  const sidebarItems = [
    {
      label: i18n.home_label,
      target: '/',
      Ico: House
    },
    {
      label: i18n.skills_label,
      target: '/skills',
      Ico: Sparkles
    },
    {
      label: i18n.experiences_label,
      target: '/past-experiences',
      Ico: Clock
    },
    {
      label: i18n.portfolio_label,
      target: '/portfolio',
      Ico: List
    },
    {
      label: i18n.contact_label,
      target: '/contact',
      Ico: Chat
    }
  ]

  const setAnimationDirectionHandler = (newIndex: number) => {
    setAnimationDirection(currentIndex > newIndex ? 'top' : 'bottom')
    setCurrentIndex(newIndex)
  }

  return (
    <S.SidebarWrapper>
      <S.SidebarContent>
        {sidebarItems.map((item, index) => (
          <Link href={item.target} key={index} passHref>
            <S.SidebarItem
              onClick={() => setAnimationDirectionHandler(index)}
              isActive={
                item.target === '/'
                  ? router.pathname === '/'
                  : router.pathname.includes(item.target)
              }
              key={index}
              aria-label={item.label}
            >
              <item.Ico color={colors.background_opos} />
              <S.SidebarItemLabel>{item.label}</S.SidebarItemLabel>
            </S.SidebarItem>
          </Link>
        ))}
      </S.SidebarContent>
    </S.SidebarWrapper>
  )
}

export default Sidebar
