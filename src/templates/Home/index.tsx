import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

import * as S from './styles'
import * as animations from './animations'

import globalAnimationCtx from 'contexts/globalAnimation'
import * as layoutAnimations from 'animations/fade'
import Link from 'next/link'

export type HomeTemplateProps = {
  setAnimationDirection: any
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

const HomeTemplate = ({ i18n, setAnimationDirection }: HomeTemplateProps) => {
  const { title } = useContext(ThemeContext)
  const globalAnimation = useContext(globalAnimationCtx)

  const menuItems = [
    {
      target: '/skills',
      label: i18n.link_1_label
    },
    {
      target: '/past-experiences',
      label: i18n.link_2_label
    },
    {
      target: '/portfolio',
      label: i18n.link_3_label
    },
    {
      target: '/contact',
      label: i18n.link_4_label
    }
  ]

  const setAnimationDirectionHandler = (newIndex: number) => {
    const oldPage = globalAnimation.currentPage
    setAnimationDirection({
      direction: oldPage > newIndex ? 'top' : 'bottom',
      currentPage: newIndex
    })
  }

  return (
    <motion.div
      {...(globalAnimation.direction === 'top'
        ? layoutAnimations.fadeTop
        : layoutAnimations.fadeBottom)}
    >
      <S.HomeWrapper>
        <S.HomeImage>
          <div className="profile-img">
            <Image
              src={i18n.light_profile_image.url}
              blurDataURL={i18n.light_profile_image.url}
              layout="fill"
              alt="Imagem de perfil Vitor Régis de Ramos"
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
                    alt="Fígura de uma Águia"
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
                    alt="Fígura de uma coruja"
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
                    alt="Fígura de um sol"
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
                    alt="Fígura de uma lua"
                    width={325}
                    height={260}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </S.HomeImage>
        <S.HomeCaption>
          <S.HomeCaptionTitle
            dangerouslySetInnerHTML={{ __html: i18n.title }}
          />
          <S.HomeCaptionParagraph
            dangerouslySetInnerHTML={{ __html: i18n.description }}
          />
        </S.HomeCaption>
        <S.HomeLinks>
          <S.HomeLinksTitle
            dangerouslySetInnerHTML={{ __html: i18n.menu_title }}
          />
          <S.HomeLinksList>
            {menuItems.map((item, index) => (
              <Link href={item.target} passHref key={index}>
                <S.HomeLinksItem
                  onClick={() => setAnimationDirectionHandler(index)}
                >
                  {item.label}
                  {index === menuItems.length - 1 ? `. ` : ', '}
                </S.HomeLinksItem>
              </Link>
            ))}
          </S.HomeLinksList>
        </S.HomeLinks>
      </S.HomeWrapper>
    </motion.div>
  )
}

export default HomeTemplate
