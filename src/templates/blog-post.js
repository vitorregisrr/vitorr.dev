import React from 'react'

import {graphql} from 'gatsby'
import Layout from '../components/Layout';
import PostContent from '../components/PostContent';
import RecommendedPosts from '../components/recommendedPosts';

const BlogPost = ({data, pageContext}) => {
    const post = data.markdownRemark;

    return (
        <Layout seo={{
            title: post.frontmatter.title
        }}>
            <PostContent
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                description={post.frontmatter.description}
                timeToRead={post.timeToRead}
                html={post.html}
            />

            <RecommendedPosts next={pageContext.nextPost} previous={pageContext.previousPost}></RecommendedPosts>
        </Layout>
    )
}

export const query = graphql `
    query Post($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        html
        timeToRead
        frontmatter {
            title
            description
            date(locale:"pt-br", formatString: "DD [de] MMMM [de] YYYY")
        }
    }
}
`

export default BlogPost