import React from 'react'
import {useStaticQuery, graphql } from 'gatsby'

import * as S from './styled';

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query { 
                avatarImage: file(relativePath: { eq: "me.png"}){
                    childImageSharp {
                        fluid(maxWidth: 150){
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }   
            }
        `
    )

    return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid } />
}

export default Avatar;