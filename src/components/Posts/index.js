import React from 'react'
import {useStaticQuery} from 'gatsby'

import PostItem from './PostItem'

import * as S from './styled'

const Posts = () => {
    const {allMarkdownRemark} = useStaticQuery(graphql `
            query Posts {
                  allMarkdownRemark {
                        edges {
                            node {
                                fields {
                                    slug
                                }
                                timeToRead
                                frontmatter {
                                    title
                                    category
                                    background
                                    description
                                    date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
                                }
                                wordCount {
                                words
                                }
                            }
                        }
                    }
                }
        `);

    return (
        <S.PostsWrapper>
            {allMarkdownRemark
                .edges
                .map(({
                    node: {
                        timeToRead,
                        frontmatter: {
                            title,
                            category,
                            background,
                            description,
                            date
                        },
                        fields: {
                            slug
                        }
                    }
                }) => (
                    <PostItem
                        key={slug}
                        slug={slug}
                        background={background}
                        category={category}
                        date={date}
                        timeToRead={timeToRead}
                        title={title}
                        description={description} />
                    )
                )
            }
        </S.PostsWrapper>
    )
}

export default Posts;