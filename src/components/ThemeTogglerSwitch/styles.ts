import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ThemeTogglerWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 100px;
  height: 42px;
  background-color: ${(props) => props.theme.colors.background};
  border: none;
  border-radius: 32px;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;

  &:focus {
    outline: none;
  }
`

export const SwitchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .ico {
    position: absolute;

    &.moon {
      margin: 0 -7px -4px 0;
      left: 58px;
    }

    &.sun {
      margin: 0 -4px -5px 0;
      left: 8px;
    }

    img {
      width: 34px;
      opacity: 0.7;

      @media screen and (max-width: 768px) {
        width: 24px;
      }
    }
  }
`

export const SwitchKnob = styled(motion.div)`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 28px;
  height: 28px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`
