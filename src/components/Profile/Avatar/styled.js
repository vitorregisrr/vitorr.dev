import styled from 'styled-components';
import Img from 'gatsby-image';

export const AvatarWrapper = styled(Img)`
    position: relative;
    width: 120px;
    margin: 0 auto;
    border-radius: 50%;
    object-fit: cover;

    @media screen and (max-width: 1200px){
        width: 120px;
    }
`