import styled from 'styled-components';
import Img from 'gatsby-image';

export const AvatarWrapper = styled(Img)`
    position: relative;
    width: 150px;
    margin: 0 auto;

    @media screen and (max-width: 1200px){
        width: 120px;
    }
`