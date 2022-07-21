import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Flex, Box } from 'rebass'

import MainHeader from 'components/Header'

import * as S from './styles'
import { List } from 'components/UI/ico'
import Card from 'components/UI/Card'

type PortfolioItem = {
  link: string
  title: string
  image: {
    url: string
  }
}

type PortfolioTemplateProps = {
  i18n: {
    title: string
    description: string
    items: PortfolioItem[]
  }
}

const PortfolioTemplate = ({ i18n }: PortfolioTemplateProps) => {
  const { colors } = useContext(ThemeContext)

  return (
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
  )
}

export default PortfolioTemplate
