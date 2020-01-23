import React from 'react'
import {useStaticQuery} from 'gatsby'
import TransitionLink from '../TransitionLink/'

import Avatar from './Avatar'
import * as S from './styled';
import SocialLinks from './SocialLinks';
import MenuLinks from './MenuLinks';

const Profile = () => {

    const {
        site: {
            siteMetadata: {
                title,
                description,
                position
            }
        }
    } = useStaticQuery(graphql `
            query MySiteMetaData {
                    site{
                        siteMetadata {
                        author
                        description,
                        position,
                        title
                    }
                }
            }
        `);

    return (
        <S.ProfileWrapper>
           <TransitionLink  to="/">
            <Avatar></Avatar>
           </TransitionLink>
           <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center'}}>
           <S.ProfileAuthor>
                {title}
            </S.ProfileAuthor>
            <S.ProfilePosition>
                {position}
            </S.ProfilePosition>
           </div>
            <S.ProfileDescription>
                {description}
            </S.ProfileDescription>

            <SocialLinks></SocialLinks>

            <MenuLinks></MenuLinks>
        </S.ProfileWrapper>
    )
}

export default Profile;