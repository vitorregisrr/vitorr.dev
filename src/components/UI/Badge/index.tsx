import styled from 'styled-components'

const S = {
  Badge: styled.label`
    display: block;
    font-size: 2rem;
    padding: 10px 24px;
    background-color: ${(props) =>
      props.theme.title === `light`
        ? props.theme.colors.secondary
        : props.theme.colors.primary};
    color: ${(props) =>
      props.theme.title === `light`
        ? props.theme.colors.background_opos
        : props.theme.colors.background};
    width: auto;
    border-radius: 30px;
    text-transform: uppercase;
    font-weight: 600;
    transition: all 0.45s ease-in;
  `
}

type BadgeProps = {
  children: React.ReactNode
}

const Badge = ({ children }: BadgeProps) => <S.Badge>{children}</S.Badge>

export default Badge
