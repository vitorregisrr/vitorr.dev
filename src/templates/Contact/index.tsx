import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { EmailOutline } from '@styled-icons/evaicons-outline'
import { motion } from 'framer-motion'
import MainHeader from 'components/Header'
import * as layoutAnimations from 'animations/fade'

import * as S from './styles'
import { Chat } from 'components/UI/ico'
import { Github, Linkedin, Whatsapp } from '@styled-icons/bootstrap'
import globalAnimationCtx from 'contexts/globalAnimation'

export type ContactTemplateProps = {
  i18n: {
    title: string
    subtitle: string
    linkedinInfo: {
      label: string
      link: string
    }
    whatsapp_info: {
      label: string
      link: string
    }
    githubInfo: {
      link: string
      label: string
    }
    emailInfo: {
      label: string
      link: string
    }
  }
}
const ContactTemplate = ({ i18n }: ContactTemplateProps) => {
  const { colors } = useContext(ThemeContext)
  const globalAnimation = useContext(globalAnimationCtx)

  return (
    <motion.div
      {...(globalAnimation.direction === 'top'
        ? layoutAnimations.fadeTop
        : layoutAnimations.fadeBottom)}
    >
      <S.ContactWrapper>
        <MainHeader
          ico={<Chat color={colors.primary} />}
          title={i18n.title}
          subtitle={``}
          description={i18n.subtitle}
          align={`center`}
        />
        <S.ContactSection>
          <S.ContactLinks>
            <S.ContactLink target="_blank" href={i18n.whatsapp_info.link}>
              <Whatsapp size={33} fill={colors.background_opos} />
              {i18n.whatsapp_info.label}
            </S.ContactLink>

            <S.ContactLink target="_blank" href="mailto:contact@vitorr.dev">
              <EmailOutline size={33} fill={colors.background_opos} />
              contact@vitorr.dev
            </S.ContactLink>

            <S.ContactLink target="_blank" href={i18n.linkedinInfo.link}>
              <Linkedin size={27} fill={colors.background_opos} />
              {i18n.linkedinInfo.label}
            </S.ContactLink>

            <S.ContactLink target="_blank" href={i18n.linkedinInfo.link}>
              <Github size={25} fill={colors.background_opos} />
              {i18n.githubInfo.label}
            </S.ContactLink>
          </S.ContactLinks>
        </S.ContactSection>
      </S.ContactWrapper>
    </motion.div>
  )
}

export default ContactTemplate
