import styled from 'styled-components'

export const SkillsWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 62px;
  padding-left: 130px;
  padding-right: 230px;
  width: 100%;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    padding: 40px 25px 40px 25px;
  }
`

export const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 0 80px 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 40px;

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
    margin-bottom: 30px;
    line-height: 1.6;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.9rem;
    display: block;
    margin-bottom: 5px;

    @media screen and (max-width: 768px) {
      font-size: 1.7rem;
    }
  }
`
