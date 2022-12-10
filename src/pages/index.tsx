import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GET_HOME_CONTENT } from 'graphql/queries'

import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

function HomePage({ i18n, setAnimationDirection }: HomeTemplateProps) {
  return (
    <HomeTemplate setAnimationDirection={setAnimationDirection} i18n={i18n} />
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { home } = await client.request(GET_HOME_CONTENT, {
    locale
  })

  return {
    props: {
      i18n: { ...home }
    }
  }
}

export default HomePage
