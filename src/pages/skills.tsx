import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GET_SKILLS_CONTENT } from 'graphql/queries'

import SkillsTemplate, { SkillsTemplateProps } from 'templates/Skills'

function ContactPage({ i18n }: SkillsTemplateProps) {
  return <SkillsTemplate i18n={i18n} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { skills } = await client.request(GET_SKILLS_CONTENT, {
    locale
  })

  return {
    props: {
      i18n: { ...skills }
    }
  }
}

export default ContactPage
