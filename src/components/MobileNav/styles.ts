import styled from 'styled-components'

export const MobileNavWrapper = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  top: 0;
  left: 0;
  transform: none;
  background-color: ${(props) => props.theme.colors.terc};
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  overflow: hidden;
`

export const MobileNavContent = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  padding-bottom: 100px;
  gap: 12px;
`

interface MobileNavItemProps {
  isActive: boolean
}

export const MobileNavItem = styled.li<MobileNavItemProps>`
  cursor: pointer;
  transition: transform 0.3s, opacity 0.3s;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
    gap: 12px;
    text-decoration: none;

    svg,
    path {
      width: 28px;
      height: 28px;
      opacity: ${(props) => (props.isActive ? 1 : 0.5)};
      transition: all 0.3s ease-in-out;
    }
  }

  &:hover {
    transform: scale(1.1);

    svg,
    path {
      opacity: 1;
    }
  }
`

export const MobileNavItemLabel = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  opacity: 0.8;
  transition: opacity 0.3s;

  ${MobileNavItem}:hover & {
    opacity: 1;
  }
`
