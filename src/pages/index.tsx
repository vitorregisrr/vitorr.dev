import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GET_CONTENT } from 'graphql/queries'

import MainTemplate, { MainTemplateProps } from 'templates/Main'

function HomePage({ i18n }: MainTemplateProps) {
  return <MainTemplate i18n={i18n} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { home, pastExperience, portfolio, sidebar, contact, skills } =
    await client.request(GET_CONTENT, {
      locale
    })

  return {
    props: {
      i18n: { home, pastExperience, portfolio, sidebar, contact, skills }
    }
  }
}

export default HomePage
