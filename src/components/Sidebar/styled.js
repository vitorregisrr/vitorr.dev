import styled from 'styled-components'

export const SidebarWrapper = styled.aside`
     position: fixed;
     display: flex;
     align-items: center;
     flex-direction: column;
     height: 100vh;
     padding: 2rem;
     text-align: center;
     border-right: 1px solid var(--borders);
     background-color: var(--background);
     width: 17rem;
     box-sizing: border-box;


 @media screen and (max-width: 1200px){
     width: 100vw;
 }

`