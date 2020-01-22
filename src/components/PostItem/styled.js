import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const PostItemLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: all 0.4s;

  &:hover {
    color: #1fa1f2;
  }

  body[data-display="grid"] & {
    background-color: var(--background);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const PostItemWrapper = styled.article`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--borders);
  padding: 1.4rem 1.5rem;
  box-sizing: border-box;

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}

  body[data-display="grid"] & {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: none;
    padding: 2rem 1rem;
  }
`

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.background || '#d13a69'};
  border-radius: 50%;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  justify-content: center;
  min-height: 65px;
  min-width: 65px;
  text-transform: uppercase;

  ${media.lessThan("large")`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}
  
  body[data-display="grid"] & {
    margin-bottom: 13px;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;

  ${media.lessThan("large")`
    margin: 0;
  `}
  
`

export const PostItemDate = styled.time`
  font-size: 0.7rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  
`

export const PostItemDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.2;
`

