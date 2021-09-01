import { useState, useRef } from 'react'
import Sidebar from 'components/Sidebar'
import ReactFullpage from '@fullpage/react-fullpage'

import * as S from './styles'

const HomeTemplate = () => {
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
        render={({ fullpageApi }) => {
          // @ts-ignore
          fullpageRef.current = fullpageApi
          return (
            <ReactFullpage.Wrapper>
              <S.SectionWrapper className="section">
                <p>Section 1</p>
              </S.SectionWrapper>
              <S.SectionWrapper className="section">
                <p>Section 2</p>
              </S.SectionWrapper>
              <S.SectionWrapper className="section">
                <p>Section 3</p>
              </S.SectionWrapper>
              <S.SectionWrapper className="section">
                <p>Section 4</p>
              </S.SectionWrapper>
              <S.SectionWrapper className="section">
                <p>Section 5</p>
              </S.SectionWrapper>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </>
  )
}

export default HomeTemplate
