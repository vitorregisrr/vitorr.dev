import styled from 'styled-components'

export const SidebarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 74px;
  background-color: ${(props) => props.theme.colors.terc};
  transition: background-color 0.5s ease-in-out;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 70px;
    bottom: 0;
    left: 0;
    top: unset;
  }
`

export const SidebarContent = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0 22px;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 0 35px;
  }
`

export const SidebarItemLabel = styled.span`
  position: absolute;
  top: 50%;
  right: -23px;
  pointer-events: none;
  display: block;
  font-size: 19px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  text-transform: lowercase;
  opacity: 0;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.background_opos};
  transition: all 0.45s ease-in;
  transform: translate(100%, -50%);
  white-space: nowrap;
  border-radius: 30px;
  padding: 6px 20px 7px 20px;

  &::after {
    content: '';
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-bottom: 13px solid transparent;
    border-right: 28px solid ${(props) => props.theme.colors.background_opos};
    transition: all 0.45s ease-in;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

interface SidebarItemProps {
  isActive: boolean
}

export const SidebarItem = styled.li<SidebarItemProps>`
  position: relative;
  margin-bottom: 41px;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    svg {
      transform: scale(1.1);
    }

    & > ${SidebarItemLabel} {
      opacity: 1;
    }
  }

  &:hover {
    & > ${SidebarItemLabel} {
      opacity: 1;
      background-color: ${(props) => props.theme.colors.background_opos};
    }
  }

  svg,
  path {
    opacity: 0.5;
    width: 100%;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 768px) {
      width: 23px;
    }
  }

  ${(props) =>
    props.isActive &&
    `
    svg, path{
      opacity: 1;
    }
    
    &:first-child ${SidebarItemLabel} {
      opacity: 1;
      background-color: ${props.theme.colors.background_opos};
    }
    `}

  @media screen and (max-width: 768px) {
    margin-bottom: 0;

    &:not(:last-child) {
      margin-right: 40px;
    }
  }
`
