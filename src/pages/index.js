import React from "react"
import {Link} from "gatsby"

import Layout from "../components/Layout"

const IndexPage = () => (
  <>
    <Layout seo={{title: "Home"}}>
        <h1>Home</h1>
        <ul>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <Link to="/about">
                    About</Link>
            </li>
            <li>
                <Link to="/" activeStyle={{ color: 'red' }}>
                    Home</Link>
            </li>
        </ul>
    </Layout>
    </>
)

export default IndexPage
