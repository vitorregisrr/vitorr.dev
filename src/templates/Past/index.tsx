import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Flex, Box } from 'rebass'
import { Badge } from 'components/UI'

import MainHeader from 'components/Header'
import { Clock } from 'components/UI/ico'

import * as S from './styles'

type PastTemplateProps = {
  i18n: {
    title: string
    description: string
    experiences: {
      description: string
      ocuppation: string
      title: string
    }[]
  }
}

const PastTemplate = ({ i18n }: PastTemplateProps) => {
  const { colors } = useContext(ThemeContext)

  return (
    <S.PastWrapper>
      <MainHeader
        ico={<Clock color={colors.primary} />}
        title={i18n.title}
        subtitle={i18n.description}
        description={``}
      />

      <S.PastSection>
        <Flex flexWrap="wrap">
          <Box width={[1]}>
            <S.PastParagraph>
              {i18n.experiences.map((exp, i) => (
                <p key={i}>
                  <b>{exp.title}</b>
                  <b>
                    as <Badge size={`small`}> {exp.ocuppation}</Badge>
                  </b>
                  {exp.description}
                </p>
              ))}
            </S.PastParagraph>
          </Box>
        </Flex>
      </S.PastSection>
    </S.PastWrapper>
  )
}

export default PastTemplate
