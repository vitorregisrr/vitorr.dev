require('dotenv').config()

const algoliaQueries = require('./src/utils/algolia_queries')

module.exports = {
    siteMetadata: {
        title: `Vitor Régis`,
        position: `JS Full-Stack Developer`,
        description: `Um cantinho com alguns artigos meus sobre tecnologia e projetos que realizei como freelancer. `,
        author: `@vitorregisr`,
        siteUrl: `https://www.vitorr.netlify.com`
    },
    plugins: [
        // needs to be the first one to work with gatsby-remark-images
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `uploads`,
                path: `${__dirname}/static/assets/img`
            }
        },
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`, {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Montserrat`,
                        variants: [`300`, `400`, `700`]
                    }
                ]
            }
        }, {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        }, {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/data/posts`
            }
        }, {
            resolve: 'gatsby-transformer-remark',
            plugins: [
                {
                    resolve: `gatsby-remark-relative-images`,
                    options: {
                        name: `uploads`
                    }
                }, {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 960
                    }
                },
                `gatsby-remark-lazy-load`,
                `gatsby-remark-prismjs`
            ]
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`, {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `vitorr.dev`,
                short_name: `vitorr.dev`,
                start_url: `/blog`,
                background_color: `#16202c`,
                theme_color: `#16202c`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-algolia-search`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
                queries: algoliaQueries,
                chunckSize: 10000,
                enablePartialsUpdates: true
            }
        },
        `gatsby-plugin-netlify-cms`
        // this (optional) plugin enables Progressive Web App + Offline functionality To
        // learn more, visit: https://gatsby.dev/offline `gatsby-plugin-offline`,
    ]
}
