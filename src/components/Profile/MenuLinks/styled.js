import styled from 'styled-components'
import media from "styled-media-query"
import TransitionLink from '../../TransitionLink/'

export const MenuLinksWrappper = styled.nav `
    ${media.lessThan("large")`
        display: none;
    `}
`

export const MenusLinkList = styled.ul `
    font-size: 0.9rem;
    font-weight: 300;
`

export const MenusLinkItem = styled.li `
    padding: 0.5rem 0;
`

export const MenuLinksLink = styled(TransitionLink)`
    text-decoration: none;
    color: var(--texts);
    transition: all 0.4s;

    &.active, &:hover{
        color: var(--highlight);
    }
`