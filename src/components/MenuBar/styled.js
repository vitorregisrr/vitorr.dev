import styled from 'styled-components'
import {Link} from 'gatsby'

export const MenuBarWrapper = styled.aside `
    position: fixed;
    right: 0;
    width: 3.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    height: 100vh;
    background: #192734;
    border-left: 1px solid var(--borders);
    box-sizing: border-box;
`

export const MenuBarGroup = styled.div `
    display: flex;
    flex-direction: column;
`

export const MenuBarItem = styled.span `
    color: var(--texts); 
    cursor: pointer; 
    display: block; 
    height: 1.9rem; 
    padding: 0.5rem; 
    position: relative; 
    width: 1.2rem;  
    transition: all 0.4s;
 
    &:hover { 
        color: #1fa1f2; 
    } 
`

export const MenuBarLink = styled(Link)`
    font-size: 0.5rem;
    display: block;
`
