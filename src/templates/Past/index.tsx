import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Flex, Box } from 'rebass'
import { Badge } from 'components/UI'

import MainHeader from 'components/Header'
import { Clock } from 'components/UI/ico'

import * as S from './styles'

const PastTemplate = () => {
  const { colors } = useContext(ThemeContext)

  return (
    <S.PastWrapper>
      <MainHeader
        ico={<Clock color={colors.primary} />}
        title={`My Past Experiences`}
        subtitle={`The journey i've lived to be where i'm now.`}
        description={``}
      />

      <S.PastSection>
        <Flex flexWrap="wrap">
          <Box width={[1]}>
            <S.PastParagraph>
              <p>
                <b>Evolve Studio (MAR 2019 - present)</b>
                <b>
                  as{' '}
                  <Badge size={`small`}>
                    {' '}
                    founder &amp; full-stack engineer
                  </Badge>
                </b>
                Evolve is a brand idealized and founded by me to attend
                freelancer demands for projects development with modern
                tech­nologies. I&apos;m responsible for the management and tech
                leadership of the projects, team, technologies and I also
                develop full-stack.
              </p>
              <p>
                <b>Sorocabacom (JAN 2019 -JAN 2020)</b>
                <b>
                  as <Badge size={`small`}>front-end developer </Badge>
                </b>
                Development, replication and maintenance of a great diversity of
                web elements (ecommerces, platforms, landing pages,
                institutional websites, etc) in high demand flow. Technologies
                used: React, Graphql, Next, Gatsby, etc.
              </p>

              <p>
                <b>IFSUL Campus (May 2018 - DEC 2018)</b>
                <b>
                  as <Badge size={`small`}>game developer</Badge>
                </b>
                Creative idealization and developing of 2D educative games with
                Phaser.js and an online education platform with React.js and
                Node.js.
              </p>
              <p>
                <b>Freelancer (DEC 2017 - DEC 2018) </b>
                <b>
                  as <Badge size={`small`}>full-stack developer</Badge>
                </b>
                Development of a great diversity of websites with HTML, SCSS,
                automation toolkits like Gulp, Webpack, and a several JavaScript
                for web (React and Jquery) and for back-end (Node.js).
              </p>
              <p>
                <b>Inove Comunicação Visual (APR 2018 - DEC 2018) </b>
                <b>
                  as <Badge size={`small`}>art finalist (designer)</Badge>
                </b>
                Creation of design materiais, for online and offline publication
                (Photoshop, lllustrator, Adobe XD, etc).
              </p>
              <p>
                <b>VOLUNTEER </b>
                <b>Rotaract Bagé (AUG 2017 - Nov 2018)</b>
                <b>
                  as <Badge size={`small`}>public image director</Badge>{' '}
                </b>
                Poverty Alleviation and community helping.{' '}
              </p>
            </S.PastParagraph>
          </Box>
        </Flex>
      </S.PastSection>
    </S.PastWrapper>
  )
}

export default PastTemplate
