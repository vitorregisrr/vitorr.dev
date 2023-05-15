import styled from 'styled-components'

export const DownloadCVWrapper = styled.a`
  position: fixed;
  right: 20px;
  bottom: 25px;
  width: 55px;
  height: 55px;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  cursor: pointer;
  border: none !important;
  outline: none !important;
  background-color: ${(props) => props.theme.colors.background_opos};
  transition: all 0.3s;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    width: 55px;
    height: 55px;
    bottom: 90px;
    right: 15px;

    svg {
      width: 30px;
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    transform: scale(1.1);

    svg {
      color: ${(props) => props.theme.colors.background};
    }
  }
`

export const DownloadCVIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  svg {
    width: 34px;
    color: ${(props) => props.theme.colors.background};
    transition: color 0.3s;
  }
`
