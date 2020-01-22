import React from "react"

import Layout from "../components/Layout/"
import Search from "../components/Search"

const AboutPage = () => {
    return (
        <Layout seo={{
            title: "Home"
        }}>
           <Search />
        </Layout>
    )
}

export default AboutPage;