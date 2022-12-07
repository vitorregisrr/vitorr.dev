// @ts-nocheck
import { useState, useRef } from 'react'
import Sidebar from 'components/Sidebar'

import HomeTemplate from '../Home'
import SkillsTemplate from '../Skills'
import PastTemplate from '../Past'
import PortfolioTemplate from '../Portfolio'
import ContactTemplate from '../Contact'

import * as S from './styles'
import LanguagesButton from 'components/LanguagesButton'

export type MainTemplateProps = {
  i18n: {
    home: {
      title: string
      description: string
      menu_title: string
      link_1_label: string
      link_2_label: string
      link_3_label: string
      link_4_label: string
      light_profile_image: {
        url: string
      }
      dark_profile_image: {
        url: string
      }
    }

    pastExperience: {
      title: string
      description: string
      experiences: {
        description: string
        ocuppation: string
        title: string
      }
    }

    portfolio: {
      title: string
      description: string
      items: {
        link: string
        title: string
        image: {
          url: string
        }
      }
    }

    sidebar: {
      skills_label: string
      portfolio_label: string
      home_label: string
      experiences_label: string
      contact_label: string
    }

    contact: {
      title: string
      subtitle: string
      linkedinInfo: {
        label: string
        link: string
      }
      whatsapp_info: {
        label: string
        link: string
      }
      githubInfo: {
        link: string
        label: string
      }
      emailInfo: {
        label: string
        link: string
      }
    }

    skills: {
      title: string
      subtitle: string
      rightText: {
        html: string
      }
      leftText: {
        html: string
      }
      description: string
      badge_title: string
    }
  }
}

const MainTemplate = ({ i18n }: MainTemplateProps) => {
  const [currentIndex, setCurrentIndex] = useState<any>(0)
  const fullpageRef = useRef()

  const moveFullpage = (index: number) => {
    if (fullpageRef.current) {
      // @ts-ignore
      fullpageRef.current.moveTo(index + 1)
    }
  }

  return (
    <>
      <LanguagesButton />
      <Sidebar i18n={i18n.sidebar} />

      <S.SectionWrapper className="section">
        <HomeTemplate i18n={i18n.home} />
      </S.SectionWrapper>
      <S.SectionWrapper className="section">
        <SkillsTemplate i18n={i18n.skills} />
      </S.SectionWrapper>
      <S.SectionWrapper className="section">
        <PastTemplate i18n={i18n.pastExperience} />
      </S.SectionWrapper>
      <S.SectionWrapper className="section">
        <PortfolioTemplate i18n={i18n.portfolio} />
      </S.SectionWrapper>
      <S.SectionWrapper className="section">
        <ContactTemplate i18n={i18n.contact} />
      </S.SectionWrapper>
    </>
  )
}

export default MainTemplate
