import styled from 'styled-components'
import media from "styled-media-query"

export const PaginationWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--borders);
    font-size: 15px;
    color: var(--texts);
    padding: 1.5rem 2rem;

    ${media.lessThan("large")`
        font-size: .8rem;
        padding: 1rem;
    `}

    a{
        color: var(--texts);
        text-decoration: none;
        transition: color 0.5s;

        &:hover{
            color: var(--highlight);
        }
    }
`

export default PaginationWrapper;