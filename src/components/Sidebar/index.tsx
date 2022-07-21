import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { House, Sparkles, Clock, List, Chat } from 'components/UI/ico'

import * as S from './styles'

type SidebarProps = {
  currentIndex: number
  moveFullpage: (index: number) => void
  i18n: {
    home_label: string
    skills_label: string
    experiences_label: string
    contact_label: string
    portfolio_label: string
  }
}

const Sidebar = ({ currentIndex, moveFullpage, i18n }: SidebarProps) => {
  const { colors } = useContext(ThemeContext)

  const sidebarItems = [
    {
      label: i18n.home_label,
      target: 'section-home',
      Ico: House
    },
    {
      label: i18n.skills_label,
      target: 'section-skills',
      Ico: Sparkles
    },
    {
      label: i18n.experiences_label,
      target: 'section-experiences',
      Ico: Clock
    },
    {
      label: i18n.portfolio_label,
      target: 'section-portfolio',
      Ico: List
    },
    {
      label: i18n.contact_label,
      target: 'section-contact',
      Ico: Chat
    }
  ]

  const onItemClick = (index: number) => {
    moveFullpage(index)
  }

  return (
    <S.SidebarWrapper>
      <S.SidebarContent>
        {sidebarItems.map((item, index) => (
          <S.SidebarItem
            isActive={currentIndex === index}
            onClick={() => onItemClick(index)}
            key={index}
            aria-label={item.label}
          >
            <item.Ico color={colors.background_opos} />
            <S.SidebarItemLabel>{item.label}</S.SidebarItemLabel>
          </S.SidebarItem>
        ))}
      </S.SidebarContent>
    </S.SidebarWrapper>
  )
}

export default Sidebar
