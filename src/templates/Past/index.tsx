import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import MainHeader from 'components/Header'
import { Clock } from 'components/UI/ico'

import * as S from './styles'

const PastTemplate = () => {
  const { colors } = useContext(ThemeContext)

  return (
    <S.PastWrapper>
      <MainHeader
        ico={<Clock color={colors.primary} />}
        title={`My Past Experiences`}
        subtitle={`The journey i've lived to be where i'm now.`}
        description={``}
      />
    </S.PastWrapper>
  )
}

export default PastTemplate
