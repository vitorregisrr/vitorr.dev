import styled from 'styled-components'

export const SkillsWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 62px;
  padding-left: 130px;
  padding-right: 230px;
  margin-bottom: 30px;
  width: 100%;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    padding: 40px 25px 0 25px;
    margin-bottom: 45px;
  }
`

export const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 0;

  @media screen and (max-width: 768px) {
    label {
      margin-bottom: 25px;
    }
  }
`

export const SkillsParagraph = styled.div`
  padding-top: 20px;

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  b {
    font-size: 1.9rem;
    display: block;
    margin-bottom: 10px;
  }
`
