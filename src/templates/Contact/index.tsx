import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { EmailOutline } from '@styled-icons/evaicons-outline'
import MainHeader from 'components/Header'

import * as S from './styles'
import { Chat } from 'components/UI/ico'
import { Github, Linkedin, Whatsapp } from '@styled-icons/bootstrap'

const ContactTemplate = () => {
  const { colors } = useContext(ThemeContext)

  return (
    <S.ContactWrapper>
      <MainHeader
        ico={<Chat color={colors.primary} />}
        title={`Lets chat?`}
        subtitle={``}
        description={``}
        align={`center`}
      />

      <S.ContactSection>
        <S.ContactLinks>
          <S.ContactLink target="_blank" href="mailto:contact@vitorr.dev">
            <Whatsapp size={33} fill={colors.background_opos} />
            +55 (53) 99708-3545
          </S.ContactLink>

          <S.ContactLink target="_blank" href="mailto:contact@vitorr.dev">
            <EmailOutline size={33} fill={colors.background_opos} />
            contact@vitorr.dev
          </S.ContactLink>

          <S.ContactLink
            target="_blank"
            href="https://www.linkedin.com/in/vitorregisr/"
          >
            <Linkedin size={27} fill={colors.background_opos} />
            linkedin.com/in/vitorregisr/
          </S.ContactLink>

          <S.ContactLink target="_blank" href="https://github.com/vitorregisrr">
            <Github size={25} fill={colors.background_opos} />
            github.com/vitorregisrr
          </S.ContactLink>
        </S.ContactLinks>
      </S.ContactSection>
    </S.ContactWrapper>
  )
}

export default ContactTemplate
