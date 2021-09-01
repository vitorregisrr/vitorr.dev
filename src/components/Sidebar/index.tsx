import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { House, Sparkles, Clock, List, Chat } from 'components/UI/ico'

import * as S from './styles'

type SidebarProps = {
  currentIndex: number
  moveFullpage: (index: number) => void
}

const Sidebar = ({ currentIndex, moveFullpage }: SidebarProps) => {
  const { colors } = useContext(ThemeContext)

  const sidebarItems = [
    {
      label: 'Home',
      target: 'section-home',
      Ico: House
    },
    {
      label: 'Skills / Knowledge',
      target: 'section-skills',
      Ico: Sparkles
    },
    {
      label: 'Past Experiences',
      target: 'section-experiences',
      Ico: Clock
    },
    {
      label: 'Portfolio',
      target: 'section-portfolio',
      Ico: List
    },
    {
      label: 'Contact',
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
            // @ts-ignore
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
