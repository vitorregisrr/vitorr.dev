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
  box-shadow: 0.4px 0.4px 15px rgba(0, 0, 0, 0.15);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    background-image: url('/img/ico/external-link-outline.svg');
    background-size: 30px 30px;
    background-position: center center;
    background-repeat: no-repeat;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }

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

export const CardCaption = styled.div`
  font-family: 'Poppins', sans-serif;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 10px 13px;
  color: #fff;
  background: linear-gradient(
    0deg,
    rgba(14, 1, 22, 1) 20%,
    rgba(8, 1, 1, 0) 100%
  );

  .title {
    font-weight: 400;
  }

  .tags {
    display: flex;
    gap: 5px;

    .tag-item {
      font-size: 13px;
      background-color: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.background_opos};
      border-radius: 20px;
      padding: 2px 10px;
    }
  }
`
