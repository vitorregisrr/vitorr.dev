import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Flex, Box } from 'rebass'
import MainHeader from 'components/Header'

import * as S from './styles'
import { Badge } from 'components/UI'
import { Sparkles } from 'components/UI/ico'

type SkillsTemplateProps = {
  i18n: {
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

const SkillsTemplate = ({ i18n }: SkillsTemplateProps) => {
  const { colors } = useContext(ThemeContext)

  return (
    <S.SkillsWrapper>
      <MainHeader
        ico={<Sparkles color={colors.primary} />}
        title={i18n.title}
        subtitle={i18n.subtitle}
        description={i18n.description}
      />

      <S.SkillsSection>
        <Badge>{i18n.badge_title}</Badge>

        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]} p={[0, 3]}>
            <S.SkillsParagraph
              dangerouslySetInnerHTML={{ __html: i18n.leftText.html }}
            />
          </Box>
          <Box width={[1, 1 / 2]} p={[0, 3]}>
            <S.SkillsParagraph
              dangerouslySetInnerHTML={{ __html: i18n.rightText.html }}
            />
          </Box>
        </Flex>
      </S.SkillsSection>
    </S.SkillsWrapper>
  )
}

export default SkillsTemplate
