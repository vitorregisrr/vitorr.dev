import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Flex, Box } from 'rebass'
import { motion } from 'framer-motion'

import MainHeader from 'components/Header'
import { List } from 'components/UI/ico'
import Card from 'components/UI/Card'

import * as S from './styles'

import globalAnimationCtx from 'contexts/globalAnimation'
import * as layoutAnimations from 'animations/fade'

type PortfolioItem = {
  link: string
  title: string
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
          ico={<List color={colors.primary} />}
          title={i18n.title}
          subtitle={i18n.description}
          description={``}
        />

        <S.PortfolioSection>
          <Flex flexWrap="wrap">
            {i18n.items.map(({ image, link, title }: PortfolioItem, index) => (
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
                  imageAlt={title}
                />
              </Box>
            ))}
          </Flex>
        </S.PortfolioSection>
      </S.PortfolioWrapper>
    </motion.div>
  )
}

export default PortfolioTemplate
