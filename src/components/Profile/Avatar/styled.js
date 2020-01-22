import styled from 'styled-components'
import Img from 'gatsby-image'
import media from "styled-media-query"

export const AvatarWrapper = styled(Img)`
    position: relative;
    width: 120px;
    margin: 0 auto;
    border-radius: 50%;
    object-fit: cover;


    ${media.lessThan("large")`
        height: 1.875rem;
        width: 1.875rem;
        margin: 0 10px 0 0;
    `}
`