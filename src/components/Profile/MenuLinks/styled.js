import styled from 'styled-components'

import {Link} from 'gatsby'

export const MenuLinksWrappper = styled.nav `
    margin-top: 0rem; 
`

export const MenusLinkList = styled.ul `
    font-size: 0.9rem;
    font-weight: 300;
`

export const MenusLinkItem = styled.li `
    padding: 0.5rem 0;
`

export const MenuLinksLink = styled(Link)`
    text-decoration: none;
    color: #8899a6;
    transition: all 0.4s;

    &.active, &:hover{
        color: #1fa1f2;
    }
`