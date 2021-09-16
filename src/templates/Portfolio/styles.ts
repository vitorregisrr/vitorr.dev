import styled from 'styled-components'

export const PortfolioWrapper = styled.section`
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
