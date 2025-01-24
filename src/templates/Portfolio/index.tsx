import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Flex, Box } from 'rebass'
import { motion } from 'framer-motion'
import { CodeCircle, Games } from '@styled-icons/fluentui-system-filled'
import { Paintbrush } from '@styled-icons/fa-solid'

import MainHeader from 'components/Header'
import { List } from 'components/UI/ico'
import Card from 'components/UI/Card'

import * as S from './styles'

import globalAnimationCtx from 'contexts/globalAnimation'
import * as layoutAnimations from 'animations/fade'

type PortfolioItem = {
  link: string
  title: string
  technologies: string[]
  categories: string[]
  image: {
    url: string
  }
}

export type PortfolioTemplateProps = {
  i18n: {
    title: string
    description: string
    items: PortfolioItem[]
  }
}

const PortfolioTemplate = ({ i18n }: PortfolioTemplateProps) => {
  const { colors } = useContext(ThemeContext)
  const globalAnimation = useContext(globalAnimationCtx)

  return (
    <motion.div
      {...(globalAnimation.direction === 'top'
        ? layoutAnimations.fadeTop
        : layoutAnimations.fadeBottom)}
    >
      <S.PortfolioWrapper>
        <MainHeader
          ico={<List color={colors.background_opos} />}
          title={i18n.title}
          subtitle={i18n.description}
          description={``}
        />

        <S.PortfolioSection>
          <S.PortfolioSectionTitle>
            <Paintbrush size={34}></Paintbrush>
            Design and Development
          </S.PortfolioSectionTitle>
          <Flex flexWrap="wrap">
            {i18n.items
              .filter((i) => i.categories.includes('designandevelopment'))
              .map(
                (
                  {
                    image,
                    link,
                    title,
                    categories,
                    technologies
                  }: PortfolioItem,
                  index
                ) => (
                  <Box
                    key={index}
                    width={[1, 1 / 2, 1 / 2, 1 / 3]}
                    px={[0, 3]}
                    py={[2, 3]}
                  >
                    <Card
                      link={link}
                      title={title}
                      image={image.url}
                      categories={categories}
                      technologies={technologies}
                      imageAlt={title}
                    />
                  </Box>
                )
              )}
          </Flex>

          <S.PortfolioSectionTitle>
            <CodeCircle size={40}></CodeCircle>
            Only Development
          </S.PortfolioSectionTitle>
          <Flex flexWrap="wrap">
            {i18n.items
              .filter((i) => i.categories.includes('onlydevelopment'))
              .map(
                (
                  {
                    image,
                    link,
                    title,
                    categories,
                    technologies
                  }: PortfolioItem,
                  index
                ) => (
                  <Box
                    key={index}
                    width={[1, 1 / 2, 1 / 2, 1 / 3]}
                    px={[0, 3]}
                    py={[2, 3]}
                  >
                    <Card
                      link={link}
                      title={title}
                      image={image.url}
                      categories={categories}
                      technologies={technologies}
                      imageAlt={title}
                    />
                  </Box>
                )
              )}
          </Flex>

          <S.PortfolioSectionTitle>
            <Games size={45}></Games>
            Games
          </S.PortfolioSectionTitle>
          <Flex flexWrap="wrap">
            {i18n.items
              .filter((i) => i.categories.includes('games'))
              .map(
                (
                  {
                    image,
                    link,
                    title,
                    categories,
                    technologies
                  }: PortfolioItem,
                  index
                ) => (
                  <Box
                    key={index}
                    width={[1, 1 / 2, 1 / 2, 1 / 3]}
                    px={[0, 3]}
                    py={[2, 3]}
                  >
                    <Card
                      link={link}
                      title={title}
                      image={image.url}
                      categories={categories}
                      technologies={technologies}
                      imageAlt={title}
                    />
                  </Box>
                )
              )}
          </Flex>
        </S.PortfolioSection>
      </S.PortfolioWrapper>
    </motion.div>
  )
}

export default PortfolioTemplate
