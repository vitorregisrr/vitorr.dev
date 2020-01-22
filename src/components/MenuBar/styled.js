import styled from 'styled-components'
import media from "styled-media-query"
import {Link} from 'gatsby'

export const MenuBarWrapper = styled.aside `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    right: 0;
    width: 3.4rem;
    padding: 1rem 0;
    height: 100vh;
    background: var(--background);
    border-left: 1px solid var(--borders);
    box-sizing: border-box;
    transition: background 0.5s;

    ${media.lessThan("large")`
        border-top: 1px solid var(--borders);
        bottom: 0;
        flex-direction: row;
        height: auto;
        padding: 0;
        position: fixed;
        width: 100%;
        border-top: 1px solid var(--borders);
  `}
`

export const MenuBarGroup = styled.div `
    display: flex;
    flex-direction: column;

    ${media.lessThan("large")`
        flex-direction: row;
    `}
`

export const MenuBarItem = styled.span `
    display: block; 
    color: var(--texts); 
    cursor: pointer; 
    height: 1.9rem; 
    padding: 0.5rem; 
    position: relative; 
    width: 1.2rem;  
    transition: all 0.4s;
 
    &:hover { 
        color: #1fa1f2; 
    } 

    &.light{
        color: #d4d400;
        
        &:hover{
            color: #e2e240;
        }
    }

    &.display {
        ${media.lessThan("large")`
          display: none;
        `}
    }

    ${media.greaterThan("large")`
        &:hover {
         color: var(--highlight);
        }
    `}

    ${media.lessThan("large")`
        height: auto;
        padding: .9rem;
        position: relative;
        width: 1.2rem;
    `}
`

export const MenuBarLink = styled(Link)`
    font-size: 0.5rem;
    display: block;

    &.active {
        span {
            color: var(--highlight);
        }
    }
`
