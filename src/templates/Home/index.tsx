import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

import * as S from './styles'
import * as animations from './animations'

export type HomeTemplateProps = {
  i18n: {
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
}

const HomeTemplate = ({ i18n }: HomeTemplateProps) => {
  const { title } = useContext(ThemeContext)

  return (
    <S.HomeWrapper>
      <S.HomeImage>
        <div className="profile-img">
          <Image
            src={i18n.light_profile_image.url}
            blurDataURL={i18n.light_profile_image.url}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
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
        <S.HomeCaptionTitle dangerouslySetInnerHTML={{ __html: i18n.title }} />
        <S.HomeCaptionParagraph
          dangerouslySetInnerHTML={{ __html: i18n.description }}
        />
      </S.HomeCaption>
      <S.HomeLinks>
        <S.HomeLinksTitle
          dangerouslySetInnerHTML={{ __html: i18n.menu_title }}
        />
        <S.HomeLinksList>
          <S.HomeLinksItem>{i18n.link_1_label}, </S.HomeLinksItem>
          <S.HomeLinksItem>{i18n.link_2_label}, </S.HomeLinksItem>
          <S.HomeLinksItem>{i18n.link_3_label}, </S.HomeLinksItem>
          <S.HomeLinksItem>{i18n.link_4_label}.</S.HomeLinksItem>
        </S.HomeLinksList>
      </S.HomeLinks>
    </S.HomeWrapper>
  )
}

export default HomeTemplate
