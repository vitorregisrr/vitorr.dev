import styled from 'styled-components'
import media from "styled-media-query"

import TransitionLink from '../TransitionLink/'

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
        padding: .6rem 0.6rem;
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
    height: 2.3rem; 
    width: 2.3rem;  
    padding: 0.5rem; 
    position: relative; 
    transition: all 0.4s;
    box-sizing: border-box;
 
    &:hover { 
        color: #1fa1f2; 
    } 

    &.light{
        color: #d4d400;
        margin-bottom: 7px;
        
        ${media.lessThan("large")`
            margin-bottom: 0;
            height: 44px;
            width: 44px;
        `}

        &:hover{
            color: #e2e240;
        }
    }

    &.portfolio{
        ${media.lessThan("large")`
            height: 30;
            width: 30;
        `}
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
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        position: relative;

        svg{
            width: 100%;
            height: 100%;
        }
    `}
`

export const MenuBarLink = styled(TransitionLink)`
    font-size: 0.5rem;
    display: block;

    &.active {
        span {
            color: var(--highlight);
        }
    }
`
