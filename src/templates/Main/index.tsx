// @ts-nocheck
import { useState, useRef } from 'react'
import Sidebar from 'components/Sidebar'
import ReactFullpage from '@fullpage/react-fullpage'

import HomeTemplate from '../Home'
import SkillsTemplate from '../Skills'
import PastTemplate from '../Past'
import PortfolioTemplate from '../Portfolio'
import ContactTemplate from '../Contact'

import * as S from './styles'

const pluginWrapper = () => {
  require('../../statics/scrolloverflow.min')
}

const MainTemplate = () => {
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
      <Sidebar
        currentIndex={currentIndex}
        moveFullpage={(index) => moveFullpage(index)}
      />
      <ReactFullpage
        scrollingSpeed={1000}
        onLeave={(origin, destination) => {
          setCurrentIndex(destination.index)
        }}
        scrollBar={false}
        scrollOverflow={true}
        pluginWrapper={pluginWrapper}
        render={({ fullpageApi }) => {
          // @ts-ignore
          fullpageRef.current = fullpageApi
          return (
            <ReactFullpage.Wrapper>
              <S.SectionWrapper className="section">
                <HomeTemplate moveFullpage={(index) => moveFullpage(index)} />
              </S.SectionWrapper>
              <S.SectionWrapper className="section">
                <SkillsTemplate />
              </S.SectionWrapper>
              <S.SectionWrapper className="section">
                <PastTemplate />
              </S.SectionWrapper>
              <S.SectionWrapper className="section">
                <PortfolioTemplate />
              </S.SectionWrapper>
              <S.SectionWrapper className="section">
                <ContactTemplate />
              </S.SectionWrapper>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </>
  )
}

export default MainTemplate
