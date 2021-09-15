import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import * as S from './styles'

type HomeTemplateProps = {
  moveFullpage: (index: number) => void
}

const HomeTemplate = ({ moveFullpage }: HomeTemplateProps) => {
  const { title } = useContext(ThemeContext)

  return (
    <S.HomeWrapper>
      <S.HomeImage>
        {title === 'light' ? (
          <div className="top-img eagle">
            <Image
              src="/img/shapes/eagle.svg"
              blurDataURL="/img/shapes/eagle.svg"
              placeholder="blur"
              width={165}
              height={92}
            />
          </div>
        ) : (
          <div className="top-img coruja">
            <Image
              src="/img/shapes/coruja.svg"
              blurDataURL="/img/shapes/coruja.svg"
              placeholder="blur"
              width={181}
              height={50}
            />
          </div>
        )}

        <div className="profile-img">
          <Image
            src="/img/shapes/profile.svg"
            blurDataURL="/img/shapes/profile.svg"
            placeholder="blur"
            width={234}
            height={237}
          />
        </div>

        {title === 'light' ? (
          <div className="background-img sun">
            <Image
              src="/img/shapes/sun.svg"
              blurDataURL="/img/shapes/sun.svg"
              placeholder="blur"
              width={381}
              height={355}
            />
          </div>
        ) : (
          <div className="background-img moon">
            <Image
              src="/img/shapes/moon.svg"
              blurDataURL="/img/shapes/moon.svg"
              placeholder="blur"
              width={325}
              height={260}
            />
          </div>
        )}
      </S.HomeImage>
      <S.HomeCaption>
        <S.HomeCaptionTitle>
          Hey there! My name is{' '}
          <span className="highlight">Vitor Régis de Ramos</span> and I&apos;m a
          <span className="highlight">Creative Software Engineer</span>. 🦅
        </S.HomeCaptionTitle>
        <S.HomeCaptionParagraph>
          I&apos;m a software engineer with almost five years of experience
          developing front-end and back-end and now focused on front-end, web
          and creative stuff. I also have experience with management of
          international teams as a tech leader and trust in give my better to
          every place/project I am in!
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
