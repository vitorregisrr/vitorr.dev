import styled from 'styled-components'

export const SidebarWrapper = styled.aside`
  display: flex;
     align-items: center;
     flex-direction: column;
     height: 100vh;
     position: fixed;
     padding: 2rem;
     text-align: center;
     border-right: 1px solid #38444d;
     background-color: #192734;
     width: 13rem;


 @media screen and (max-width: 1200px){
     width: 100vw;
 }

`