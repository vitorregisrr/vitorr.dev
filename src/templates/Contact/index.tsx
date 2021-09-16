import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import MainHeader from 'components/Header'

import * as S from './styles'
import { Chat } from 'components/UI/ico'

const ContactTemplate = () => {
  const { colors } = useContext(ThemeContext)

  return (
    <S.ContactWrapper>
      <MainHeader
        ico={<Chat color={colors.primary} />}
        title={`My Contact`}
        subtitle={`Projects i've been working on.`}
        description={``}
      />
    </S.ContactWrapper>
  )
}

export default ContactTemplate
