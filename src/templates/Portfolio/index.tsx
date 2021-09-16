import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import MainHeader from 'components/Header'

import * as S from './styles'
import { List } from 'components/UI/ico'

const PortfolioTemplate = () => {
  const { colors } = useContext(ThemeContext)

  return (
    <S.PortfolioWrapper>
      <MainHeader
        ico={<List color={colors.primary} />}
        title={`My Portfolio`}
        subtitle={`Projects i've been working on.`}
        description={``}
      />
    </S.PortfolioWrapper>
  )
}

export default PortfolioTemplate
