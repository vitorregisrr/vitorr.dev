import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GET_CONTACT_CONTENT } from 'graphql/queries'

import ContactTemplate, { ContactTemplateProps } from 'templates/Contact'

function ContactPage({ i18n }: ContactTemplateProps) {
  return <ContactTemplate i18n={i18n} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { contact } = await client.request(GET_CONTACT_CONTENT, {
    locale
  })

  return {
    props: {
      i18n: { ...contact }
    }
  }
}

export default ContactPage
