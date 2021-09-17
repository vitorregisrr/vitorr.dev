import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Flex, Box } from 'rebass'

import MainHeader from 'components/Header'

import * as S from './styles'
import { List } from 'components/UI/ico'
import Card from 'components/UI/Card'

type PortfolioItem = {
  image: string
  imageAlt: string
  title?: string
  link?: string
}

const PortfolioTemplate = () => {
  const { colors } = useContext(ThemeContext)

  const portfolioData: PortfolioItem[] = [
    {
      title: 'Website Evolveme',
      image: '/img/portfolio/evolve.png',
      imageAlt: 'Website evolveme.com.br',
      link: 'https://www.evolveme.com.br'
    },
    {
      title: 'Landing Page Facens',
      image: '/img/portfolio/facens.png',
      imageAlt: 'Website Facens Pós-graduação',
      link: 'https://evolvestudio.github.io/facens-lp/pages/'
    },
    {
      title: 'Portal Pontos de Luz',
      image: '/img/portfolio/pontos-de-luz.png',
      imageAlt: 'Portal/Website Pontos de Luz',
      link: 'https://pontosdeluz.vercel.app/'
    },
    {
      title: 'Website Criabiz',
      image: '/img/portfolio/criabiz.png',
      imageAlt: 'Website Criabiz',
      link: 'https://criabiz.com/pages/index.html'
    },
    {
      title: 'Website Santo Antônio',
      image: '/img/portfolio/santo-antonio.png',
      imageAlt: 'Website Santo Antônio',
      link: 'https://chiquinhobrandao.com.br/santoantonio/'
    },
    {
      image: '/img/portfolio/francisco-brandao.png',
      imageAlt: 'Website Francisco Brandão',
      link: 'https://chiquinhobrandao.com.br/'
    },
    {
      title: 'Website Meu Portfólio',
      image: '/img/portfolio/meu-portfolio.png',
      imageAlt: 'Website Meu Portfólio',
      link: 'https://meuportfolio.vercel.app/'
    },
    {
      title: 'Website OR2U',
      image: '/img/portfolio/or2u.png',
      imageAlt: 'Website OR2U',
      link: 'https://www.or2u.com.br/'
    },
    {
      title: 'Website Prosperidade Conteúdos',
      image: '/img/portfolio/prosperidade-conteudos.png',
      imageAlt: 'Website Prosperidade Conteúdos',
      link: 'https://evolvestudio.github.io/agcprosperidade/pages/'
    },
    {
      title: 'Website SACI 2019',
      image: '/img/portfolio/saci.png',
      imageAlt: 'Website SACI 2019',
      link: 'https://saci2019.herokuapp.com/'
    },
    {
      title: 'Landing Page Cigarro do Crime',
      image: '/img/portfolio/cigarro-do-crime.png',
      imageAlt: 'Website Cigarro do Crime',
      link: 'https://evolvestudio.github.io/cigarrodocrime/pages/'
    },
    {
      title: 'Website Villa Flora',
      image: '/img/portfolio/villaflora.png',
      imageAlt: 'Website Villa Flora',
      link: 'https://evolvestudio.github.io/villaflora/pages/'
    },
    {
      title: 'Website Planagro Imóveis',
      image: '/img/portfolio/planagro.png',
      imageAlt: 'Website Planagro Imóveis',
      link: 'https://www.planagroimoveis.com.br/'
    },
    {
      title: 'Ecommerce Template Capuleto BeachWear',
      image: '/img/portfolio/capuleto.png',
      imageAlt: 'Website Capuletto Ecommerce',
      link: 'https://evolvestudio.github.io/capuleto-ecommerce/pages/'
    },
    {
      title: 'Landing Page BP Bungee',
      image: '/img/portfolio/bp-bunge.png',
      imageAlt: 'Landing Page BP Bungee',
      link: 'https://evolvestudio.github.io/bp_bunge/pages/'
    },
    {
      title: 'Ecommerce Template Finger',
      image: '/img/portfolio/finger.png',
      imageAlt: 'Website Finger',
      link: 'https://evolvestudio.github.io/fingerecommerce/pages/'
    },
    {
      title: 'Website Vidraçaria São Pedro',
      image: '/img/portfolio/vspe.png',
      imageAlt: 'Website Vidraçaria São Pedro',
      link: 'https:/www.saopedrovidracaria.com.br'
    },
    {
      title: 'Landing Page SimplesFique',
      image: '/img/portfolio/simplesfique.png',
      imageAlt: 'Website Simples Fique',
      link: 'https://evolvestudio.github.io/simplesfique/pages/'
    },
    {
      title: 'Website SK Tarpon',
      image: '/img/portfolio/sk-tarpon.png',
      imageAlt: 'Website SK Tarpon',
      link: 'https://evolvestudio.github.io/sktarpon/pages/'
    },
    {
      title: 'Website Biolab em Casa',
      image: '/img/portfolio/biolab-emcasa.png',
      imageAlt: 'Website Biolab em Casa',
      link: 'https://evolvestudio.github.io/biolabemcasa/pages/'
    },
    {
      title: 'Website Incubadora Alien',
      image: '/img/portfolio/incubadora-alien.png',
      imageAlt: 'Website Incubadora Alien',
      link: 'https://evolvestudio.github.io/biolabemcasa/pages/'
    },
    {
      title: 'Jogo Processa Dados',
      image: '/img/portfolio/processa-dados.png',
      imageAlt: 'Jogo Processa Dados',
      link: 'https://evolvestudio.github.io/processamentojogo/src/'
    },
    {
      title: 'Websie Avifauna Bagé',
      image: '/img/portfolio/avifauna-bage.png',
      imageAlt: 'Website Avifauna Bagé',
      link: 'https://avifaunabage.vercel.app/'
    },
    {
      title: 'Website Linha Dermatológica',
      image: '/img/portfolio/linha-dermatologica.png',
      imageAlt: 'Website Linha Dermatológica',
      link: 'https://www.biolabdermatologia.com.br/'
    },
    {
      title: 'Website Outubro Rosa',
      image: '/img/portfolio/outubrorosa.png',
      imageAlt: 'Website Outubro Rosa',
      link: 'https://evolvestudio.github.io/unimed-outrosa/pages/'
    },
    {
      title: 'Template Ecommerce Finger',
      image: '/img/portfolio/finger.png',
      imageAlt: 'Website Finger',
      link: 'https://evolvestudio.github.io/fingerecommerce/pages/'
    },
    {
      title: 'Website BMF',
      image: '/img/portfolio/bmf.png',
      imageAlt: 'Website BMF',
      link: 'https://evolvestudio.github.io/atua-bmf/pages/'
    }
  ]

  return (
    <S.PortfolioWrapper>
      <MainHeader
        ico={<List color={colors.primary} />}
        title={`My Portfolio`}
        subtitle={`Projects i've been working on.`}
        description={``}
      />

      <S.PortfolioSection>
        <Flex flexWrap="wrap">
          {portfolioData.map(({ image, imageAlt }: PortfolioItem, index) => (
            <Box
              key={index}
              width={[1, 1 / 2, 1 / 2, 1 / 3]}
              px={[0, 3]}
              py={[3, 3]}
            >
              <Card image={image} imageAlt={imageAlt} />
            </Box>
          ))}
        </Flex>
      </S.PortfolioSection>
    </S.PortfolioWrapper>
  )
}

export default PortfolioTemplate
