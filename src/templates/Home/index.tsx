import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

import * as S from './styles'
import * as animations from './animations'

type HomeTemplateProps = {
  moveFullpage: (index: number) => void
}

const HomeTemplate = ({ moveFullpage }: HomeTemplateProps) => {
  const { title } = useContext(ThemeContext)

  return (
    <S.HomeWrapper>
      <S.HomeImage>
        <div className="profile-img">
          <Image
            src="/img/shapes/profile.svg"
            blurDataURL="/img/shapes/profile.svg"
            placeholder="blur"
            width={234}
            height={237}
          />
        </div>

        <AnimatePresence>
          {title === 'light' ? (
            <motion.div
              {...animations.eagle}
              key="eagle"
              className="top-img eagle"
            >
              <div>
                <Image
                  src="/img/shapes/eagle.svg"
                  blurDataURL="/img/shapes/eagle.svg"
                  placeholder="blur"
                  width={165}
                  height={92}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              {...animations.coruja}
              key="coruja"
              className="top-img coruja"
            >
              <div>
                <Image
                  src="/img/shapes/coruja.svg"
                  blurDataURL="/img/shapes/coruja.svg"
                  placeholder="blur"
                  width={181}
                  height={50}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {title === 'light' ? (
            <motion.div
              {...animations.sun}
              className="background-img sun"
              key="sun"
            >
              <div>
                <Image
                  src="/img/shapes/sun.svg"
                  blurDataURL="/img/shapes/sun.svg"
                  placeholder="blur"
                  width={381}
                  height={355}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              {...animations.moon}
              key="moon"
              className="background-img moon"
            >
              <div>
                <Image
                  src="/img/shapes/moon.svg"
                  blurDataURL="/img/shapes/moon.svg"
                  placeholder="blur"
                  width={325}
                  height={260}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </S.HomeImage>
      <S.HomeCaption>
        <S.HomeCaptionTitle>
          Hey there! My name is{' '}
          <span className="highlight">Vitor Régis de Ramos</span> and I&apos;m a
          <span className="highlight">
            {' '}
            Creative Software Developer <span className="c-p">.</span> 🦅
          </span>
        </S.HomeCaptionTitle>
        <S.HomeCaptionParagraph>
          I&apos;m a software developer with almost five years of experience
          developing front-end and back-end and now focused on web and creative
          stuff. I&apos;m also experienced in management of international teams
          as a tech leader and trust in giving my better to every place/project
          I am being part of!
          <br /> Lets build something awesome together? ✨
        </S.HomeCaptionParagraph>
      </S.HomeCaption>
      <S.HomeLinks>
        <S.HomeLinksTitle>
          what more do you wanna know about me?
        </S.HomeLinksTitle>
        <S.HomeLinksList>
          <S.HomeLinksItem onClick={() => moveFullpage(1)}>
            skills,{' '}
          </S.HomeLinksItem>
          <S.HomeLinksItem onClick={() => moveFullpage(2)}>
            past experiences,{' '}
          </S.HomeLinksItem>
          <S.HomeLinksItem onClick={() => moveFullpage(3)}>
            portfolio,{' '}
          </S.HomeLinksItem>
          <S.HomeLinksItem onClick={() => moveFullpage(4)}>
            contact.
          </S.HomeLinksItem>
        </S.HomeLinksList>
      </S.HomeLinks>
    </S.HomeWrapper>
  )
}

export default HomeTemplate
