import React from 'react'
import {useStaticQuery} from 'gatsby'

import Avatar from './Avatar'
import * as S from './styled';
import SocialLinks from './SocialLinks';

const Profile = () => {

    const {
        site: {
            siteMetadata: {
                title,
                description
            }
        }
    } = useStaticQuery(graphql `
            query MySiteMetaData {
                    site{
                        siteMetadata {
                        author
                        description
                        title
                    }
                }
            }
        `);

    return (
        <S.ProfileWrapper>
            <Avatar></Avatar>
            <S.ProfileAuthor className="profile__name">
                {title}
            </S.ProfileAuthor>
            <S.ProfileDescription className="profile__desc">
                {description}
            </S.ProfileDescription>

            <SocialLinks></SocialLinks>
        </S.ProfileWrapper>
    )
}

export default Profile;