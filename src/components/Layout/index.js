import React from 'react'
import PropTypes from 'prop-types'

import Profile from '../Profile'
import SEO from '../SEO'
import GlobalStyles from '../../styles/global'
import * as S from './styled'
import Sidebar from '../Sidebar'

const Layout = ({seo, children}) => {

    return (
        <S.LayoutWrapper>
            <GlobalStyles/>
            <SEO {...seo}></SEO>
            <Sidebar>
                <Profile></Profile>
            </Sidebar>
            <S.LayoutMain>{children}</S.LayoutMain>
        </S.LayoutWrapper>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
