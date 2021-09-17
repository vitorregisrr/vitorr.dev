import styled from 'styled-components'

type BadgeProps = {
  children: React.ReactNode
  size: string
}

const S = {
  Badge: styled.label<BadgeProps>`
    display: ${(props) => (props.size === `small` ? 'inline-block' : 'block')};
    font-size: ${(props) => (props.size === `small` ? '1.4rem' : '2rem')};
    padding: ${(props) => (props.size === `small` ? '4px 13px' : '10px 20px')};
    background-color: ${(props) =>
      props.theme.title === `light`
        ? props.theme.colors.secondary
        : props.theme.colors.primary};
    color: ${(props) =>
      props.theme.title === `light`
        ? props.theme.colors.background_opos
        : props.theme.colors.background};
    border-radius: 30px;
    text-transform: ${(props) =>
      props.size === `small` ? 'lowercase' : 'uppercase'};
    font-weight: 600;
    transition: all 0.45s ease-in;
  `
}

const Badge = ({ children, size }: BadgeProps) => (
  <S.Badge size={size}>{children}</S.Badge>
)

export default Badge
