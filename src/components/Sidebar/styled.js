import styled from 'styled-components'
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
     display: flex;
     align-items: center;
     flex-direction: column;
     position: fixed;
     height: 100vh;
     padding: 2rem;
     text-align: center;
     border-right: 1px solid var(--borders);
     background-color: var(--background);
     width: 17rem;
     box-sizing: border-box;

     ${media.lessThan("large")`
        align-items: center;
        height: auto;
        padding: 0.9rem 1.4rem;
        width: 100%;
        text-align: left;
        border: none;
        box-sizing: unset;
        border-bottom: 1px solid var(--borders);
        box-shadow: 1px 1px 20px rgba(0,0,0, .4);

        body[data-theme="light"] & {
            box-shadow: 1px 1px 20px rgba(0,0,0, .1);
        }
     `}
`