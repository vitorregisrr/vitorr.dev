import styled from 'styled-components';

export const PaginationWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #38444d;
    font-size: 15px;
    color: #8899a6;
    padding: 1.5rem 2rem;

    a{
        color: #8899a6;
        text-decoration: none;
        transition: color 0.5s;

        &:hover{
            color: #1fa1f2;
        }
    }
`

export default PaginationWrapper;