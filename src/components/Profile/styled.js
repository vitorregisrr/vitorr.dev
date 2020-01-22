import styled from 'styled-components';

export const ProfileWrapper = styled.aside`
    display: flex;
    flex-direction: column;
    padding: 5px 15px;
    width: 100%;
    color: var(--texts);

    @media screen and (max-width: 1200px){
        padding: 10px 5px;
    }
`

export const ProfileLink = styled.aside`
    background-color: var(--texts);
    text-decoration: none;
    transition: all 0.4s ease-in;

    &:hover{
        color: #1fa12f;
    }
`

export const ProfileAuthor = styled.h1`
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 1.3rem;
`

export const ProfilePosition = styled.h1`
    font-weight: 300;
    font-size: 0.7rem;
    margin-top: 0.2rem;
`


export const ProfileDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.4;
  text-align: center;
  margin-top: 1rem;

  @media screen and (max-width: 1200px){
        display: none;
    }
`