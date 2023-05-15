import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { ThemeContext } from 'styled-components'

import { House, Sparkles, Clock, List, Chat } from 'components/UI/ico'

import GlobalAnimationCtx from 'contexts/globalAnimation'

import * as S from './styles'
import GlobalAnimation from 'contexts/globalAnimation'

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
  const router = useRouter()
  const globalAnimation = useContext(GlobalAnimationCtx)
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
    const oldPage = globalAnimation.currentPage

    setAnimationDirection({
      direction: oldPage > newIndex ? 'top' : 'bottom',
      currentPage: newIndex
    })
  }

  // Start GlobalAnimationCTX current page according to start page
  useEffect(() => {
    let currentPage = 0
    if (router.pathname !== '/') {
      currentPage = sidebarItems.findIndex((item, index) => {
        if (index !== 0) {
          return router.pathname.includes(item.target)
        }
      })
      console.log('isnt home page')
    }
    setAnimationDirection({ ...globalAnimation, currentPage })
  }, [])

  const handleWheel = (event: WheelEvent) => {
    if (!document.getElementById('nprogress')) {
      const totalPageHeight = document.body.scrollHeight
      const scrollPoint = window.scrollY + window.innerHeight
      // change page on hit bottom
      if (event.deltaY > 0) {
        if (scrollPoint >= totalPageHeight) {
          const oldPage = globalAnimation.currentPage
          const nextPage = oldPage === sidebarItems.length - 1 ? 0 : oldPage + 1
          setAnimationDirectionHandler(nextPage)
          router.push(sidebarItems[nextPage].target)
        }
      }

      if (event.deltaY < 0) {
        if (window.scrollY === 0) {
          const oldPage = globalAnimation.currentPage
          const nextPage = oldPage === 0 ? sidebarItems.length - 1 : oldPage - 1
          setAnimationDirectionHandler(nextPage)
          router.push(sidebarItems[nextPage].target)
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', handleWheel)

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [globalAnimation.currentPage])

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
