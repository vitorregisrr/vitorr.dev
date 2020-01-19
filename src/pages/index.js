import React from "react"

import Layout from "../components/Layout"
import Posts from "../components/Posts"

const IndexPage = () => (
    <Layout seo={{title: "Home"}}>
        <Posts></Posts>
    </Layout>
)

export default IndexPage
