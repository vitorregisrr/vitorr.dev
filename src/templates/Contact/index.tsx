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
        title={`Let's chat?`}
        subtitle={``}
        description={`Let's take a chat about your project and the ways i can help you with? Call me!`}
        align={`center`}
      />
      <S.ContactSection>
        <S.ContactLinks>
          <S.ContactLink
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5553997083545&text=Hey!%20I'm%20coming%20from%20vitorr.dev%20and..."
          >
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
