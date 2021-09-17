import styled from 'styled-components'

export const CardBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  margin-bottom: 10px;

  div,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`

export const CardWrapper = styled.article`
  position: relative;
  width: 100%;
  height: 212px;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.3s;
  cursor: pointer;
  box-shadow: 0.4px 0.4px 15px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    height: 190px;
  }

  & > ${CardBackground} {
    transform: scale(1.05);
  }

  &:hover {
    transform: scale(1.05);
  }
`
