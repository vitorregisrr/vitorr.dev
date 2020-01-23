import React from 'react'

import Layout from '../components/Layout'
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'
import ListWrapper from '../components/ListWrapper'

const BlogList = props => {
    const posts = props.data.allMarkdownRemark.edges

    const {currentPage, numPages} = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1
        ? '/'
        : `/page/${currentPage - 1}`
    const nextPage = `/page/${currentPage + 1}`

    return (
        <Layout seo={{
            title: "Home"
        }}>
            <ListWrapper>
                {posts.map(({
                    node: {
                        timeToRead,
                        frontmatter: {
                            title,
                            category,
                            background,
                            description,
                            date,
                            image
                        },
                        fields: {
                            slug
                        }
                    }
                }) => (<PostItem
                    key={slug}
                    slug={slug}
                    background={background}
                    category={category}
                    date={date}
                    timeToRead={timeToRead.toString()}
                    title={title}
                    image={image}
                    description={description}/>))
}

            </ListWrapper>
            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                currentPage={currentPage}
                numPages={numPages}
                prevPage={prevPage}
                nextPage={nextPage}/>
        </Layout>
    )
}

export const query = graphql `
        query Posts($skip: Int!, $limit: Int!) {
            allMarkdownRemark(
                sort: {fields: frontmatter___date, order: DESC}
                limit: $limit
                skip: $skip
                ){
                edges {
                    node {
                        fields {
                            slug
                        }
                        timeToRead
                        frontmatter {
                        image
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
`

export default BlogList;