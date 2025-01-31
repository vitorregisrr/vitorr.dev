import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Flex, Box } from 'rebass'
import { motion } from 'framer-motion'

import MainHeader from 'components/Header'
import { Badge } from 'components/UI'
import { Sparkles } from 'components/UI/ico'

import * as S from './styles'

import globalAnimationCtx from 'contexts/globalAnimation'
import * as layoutAnimations from 'animations/fade'

export type SkillsTemplateProps = {
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
  const globalAnimation = useContext(globalAnimationCtx)

  return (
    <motion.div
      {...(globalAnimation.direction === 'top'
        ? layoutAnimations.fadeTop
        : layoutAnimations.fadeBottom)}
    >
      <S.SkillsWrapper>
        <MainHeader
          ico={<Sparkles color={colors.background_opos} />}
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
    </motion.div>
  )
}

export default SkillsTemplate
