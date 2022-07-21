import styled from 'styled-components'

interface LanguagesButtonWrapper {
  hasContainer: boolean
  isDisabled: boolean
}
export const LanguagesButtonWrapper = styled.div<LanguagesButtonWrapper>`
  position: absolute;
  top: 17px;
  right: 81px;
  display: flex;
  align-items: center;
  z-index: 15;
  1
    ${(props) =>
      props.isDisabled &&
      `
      opacity: .3;
      cursor: not-allowed;

      button{
        pointer-events: none;
      }
    `}
    @media
    screen
    and
    (max-width: 992px) {
    right: 30px;
    top: 32px;
  }
`

export const LanguageOption = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: black;
  transition: all 0.2s;
  padding: 10px 15px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid #00000022;
  }

  &:hover {
    color: black;
  }

  &.active {
    span {
      font-weight: 600;
    }
  }

  span {
    font-family: 'Roboto';
    color: ${(props) => props.theme.colors.background};
    font-size: 12px;
    margin-left: 5px;
    font-weight: 500;
  }

  .flag {
    width: 27px;
    height: 22px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 5px;
    border: none;
    box-sizing: content-box;
    cursor: pointer;
    transition: all 0.4s;
    color: ${(props) => props.theme.colors.background};

    &:hover {
      transform: scale(1.05);
    }

    &:not(:last-child) {
    }
    div,
    img {
      object-fit: cover;
      width: 102%;
      height: 102%;
    }
    @media screen and (max-width: 992px) {
      width: 29px;
      height: 29px;
    }
  }
`

export const Button = styled.button`
  color: ${(props) => props.theme.colors.background_opos};
  background: none;
  border: none;
  transition: all 0.2s;
  cursor: pointer;

  @media screen and (max-width: 992px) {
    color: black;
  }

  span {
    position: absolute;
    bottom: 2px;
    right: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.background_opos};
    width: 17px;
    height: 17px;
    border-radius: 50%;
    text-transform: uppercase;
    font-weight: 700;
    color: ${(props) => props.theme.colors.background};
    font-size: 8px;
  }

  &:hover {
    transform: scale(1.1);
  }

  svg {
    color: ${(props) => props.theme.colors.background_opos};
    transition: color 0.2s;
  }
`

type PopupProps = {
  isVisible: boolean
}

export const Popup = styled.div<PopupProps>`
  position: absolute;
  bottom: -20px;
  left: -70px;
  background-color: ${(props) => props.theme.colors.background_opos};
  border-radius: 10px;
  transform: translateY(100%);
  transition: all 0.2s ease-in;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);

  &:after {
    content: '';
    position: absolute;
    top: -5px;
    right: 30px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${(props) => props.theme.colors.background_opos};
    transition: all 0.2s ease-in;
  }

  ${(props) => `
    opacity: ${props.isVisible ? 1 : 0};
    pointer-events: ${props.isVisible ? 'all' : 'none'};
  `}
`
