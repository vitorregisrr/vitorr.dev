import styled, { css } from 'styled-components'

export const NavTogglerWrapper = styled.button`
  position: fixed;
  right: 0;
  top: 0;
  width: 63px;
  height: 63px;
  padding: 0 0 4px 4px;
  margin: 0;
  cursor: pointer;
  border: none !important;
  outline: none !important;
  background-color: ${(props) => props.theme.colors.background_opos};
  border-radius: 0 0 0 32px;
  transition: background-color 0.5s ease-in-out;
  z-index: 2100;

  @media screen and (max-width: 768px) {
    width: 62px;
    height: 62px;
  }
`

export const NavTogglerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;

  .ico {
    position: absolute;
    ${(props) =>
      props.theme.title === 'light' &&
      css`
        filter: invert(100%) brightness(200%);
      `}

    &.close {
      margin: 0 -7px -4px 0;
    }

    &.open {
      margin: 0 -4px -5px 0;
    }

    img {
      width: 34px;

      @media screen and (max-width: 768px) {
        width: 30px;
      }
    }
  }
`
