import styled from 'styled-components'

export const ThemeTogglerWrapper = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 63px;
  height: 63px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  border: none !important;
  background-color: ${(props) => props.theme.colors.background_opos};
  transition: background-color 0.5s ease-in;
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
    }
  }
`
