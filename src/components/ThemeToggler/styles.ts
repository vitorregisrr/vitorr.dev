import styled from 'styled-components'

export const ThemeTogglerWrapper = styled.button`
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
  z-index: 1000;

  @media screen and (max-width: 768px) {
    width: 62px;
    height: 62px;
  }
`

export const ThemeTogglerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .ico {
    position: absolute;

    &.moon {
      margin: 0 -7px -4px 0;
    }

    &.sun {
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
