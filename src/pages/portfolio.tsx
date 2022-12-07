import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GET_PORTFOLIO_CONTENT } from 'graphql/queries'

import PortfolioTemplate, { PortfolioTemplateProps } from 'templates/Portfolio'

function PortfolioPage({ i18n }: PortfolioTemplateProps) {
  return <PortfolioTemplate i18n={i18n} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { portfolio } = await client.request(GET_PORTFOLIO_CONTENT, {
    locale
  })

  return {
    props: {
      i18n: { ...portfolio }
    }
  }
}

export default PortfolioPage
