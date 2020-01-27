import React from 'react'
import {useStaticQuery} from 'gatsby'
import TransitionLink from '../TransitionLink/'

import Avatar from './Avatar'
import * as S from './styled';
import SocialLinks from './SocialLinks';
import MenuLinks from './MenuLinks';

const Profile = () => {

    const query = useStaticQuery(graphql `
        {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(contents)/.*.md$/"}}) {
                edges {
                    node {
                        frontmatter {
                            about
                            nome
                            ocupation
                        }
                    }
                }
            }
        }
        `);

    const {about, ocupation, nome} = query.allMarkdownRemark.edges[0].node.frontmatter

    return (
        <S.ProfileWrapper>
            <TransitionLink to="/">
                <Avatar></Avatar>
            </TransitionLink>
            <div
                style={{
                'display': 'flex',
                'flexDirection': 'column',
                'justifyContent': 'center'
            }}>
                <S.ProfileAuthor>
                    {nome}
                </S.ProfileAuthor>
                <S.ProfilePosition>
                    {ocupation}
                </S.ProfilePosition>
            </div>
            <S.ProfileDescription>
                <div dangerouslySetInnerHTML={{ __html: about }}></div>
            </S.ProfileDescription>

            <SocialLinks></SocialLinks>

            <MenuLinks></MenuLinks>
        </S.ProfileWrapper>
    )
}

export default Profile;