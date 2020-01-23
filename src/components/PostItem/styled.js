import styled from "styled-components"
import TransitionLink from '../TransitionLink/'
import media from "styled-media-query"

export const PostItemLink = styled(TransitionLink)`
  position: relative;
  color: var(--texts);
  text-decoration: none;
  transition: all 0.4s;
  overflow: hidden;

  &:hover {
    color: #1fa1f2;
  }

  body[data-display="grid"] & {
    background-color: var(--background);
    display: flex;
    align-items: center;
    justify-content: center;

    &:after{
      content: '';
      z-index: -1;
      position: absolute;
      top: -10%;
      left: -10%;
      width: 120%;
      background-image: url(${props => props.image || 'none'});
      height: 120%;
      background-size: cover;
      background-position: center center;
      filter: blur(8px);
      -webkit-filter: blur(8px);
    }

    &:before{
      content: '';
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${props => props.image ? 'var(--background)' : 'none'};
      opacity: .8;
    }
 
    
  }
`

export const PostItemWrapper = styled.article`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--borders);
  padding: 1.4rem 1.5rem;
  box-sizing: border-box;
  z-index: 2;

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

