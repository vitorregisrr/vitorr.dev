import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Flex, Box } from 'rebass'
import MainHeader from 'components/Header'

import * as S from './styles'
import { Badge } from 'components/UI'
import { Sparkles } from 'components/UI/ico'

const SkillsTemplate = () => {
  const { colors } = useContext(ThemeContext)

  return (
    <S.SkillsWrapper>
      <MainHeader
        ico={<Sparkles color={colors.primary} />}
        title={`My skills / knowledge`}
        subtitle={`How i will help you.`}
        description={`I'm the person to take your project from the scratch and
        transform it into a real, beautiful, performative, fluid and animated application.
        Fully of life and the essence of your business. ✨ `}
      />

      <S.SkillsSection>
        <Badge>Thechnical Knowledge</Badge>

        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]} p={[0, 3]}>
            <S.SkillsParagraph>
              <p>
                <u>
                  <b>Main stack </b>
                </u>
                Javascript (ES6+), Typescript, React.js, Next.js, Node.js,
                GraphQL, AWS, and UI/UX design.
              </p>
              <p>
                <b>Automation tools</b> NPM, Webpack, Gulp.
              </p>
              <p>
                <b>Frameworks &amp; Libs </b>
                React, Redux, NextJ, Gatsby. Phaser.js, Pixi.js, Jquery.
              </p>
              <p>
                <b>Styling tools</b> SASS, Styled Components, CSS Modules,
                Bootstrap, Tailwind.
              </p>
            </S.SkillsParagraph>
          </Box>
          <Box width={[1, 1 / 2]} p={[0, 3]}>
            <S.SkillsParagraph>
              <p>
                <b>Design tools and softwares </b>
                Photoshop, lllustrator, Zeplin, AdobeXD, Figma.
              </p>

              <p>
                <b>Back-end (general) </b>
                Node, Express, PHP, Laravel, GraphQL, MongoDB, Mongoose, Mysql,
                Sequelize, Api, Api Restful.
              </p>

              <p>
                <b>Misc tools </b>
                Phonegap, Cordova, Electron.
              </p>

              <p>
                <b>Soft skills </b>
                Leadership, creativity, engagement, autonomy, patience, oratory,
                empathy, determined and communication.
              </p>
            </S.SkillsParagraph>
          </Box>
        </Flex>
      </S.SkillsSection>
    </S.SkillsWrapper>
  )
}

export default SkillsTemplate
