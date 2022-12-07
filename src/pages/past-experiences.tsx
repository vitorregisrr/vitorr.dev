import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GET_PAST_CONTENT } from 'graphql/queries'

import PastTemplate, { PastTemplateProps } from 'templates/Past'

function PastPage({ i18n }: PastTemplateProps) {
  return <PastTemplate i18n={i18n} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { pastExperience } = await client.request(GET_PAST_CONTENT, {
    locale
  })

  return {
    props: {
      i18n: { ...pastExperience }
    }
  }
}

export default PastPage
