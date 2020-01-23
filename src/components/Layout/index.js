import React from 'react'
import PropTypes from 'prop-types'
import {TransitionPortal} from 'gatsby-plugin-transition-link'

import Profile from '../Profile'
import SEO from '../SEO'
import GlobalStyles from '../../styles/global'
import * as S from './styled'
import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'

const Layout = ({seo, children}) => {

    return (
        <S.LayoutWrapper>
            <GlobalStyles/>
            <SEO {...seo}></SEO>
            <TransitionPortal level="top">
                <Sidebar>
                    <Profile></Profile>
                </Sidebar>
            </TransitionPortal>
            <S.LayoutMain>{children}</S.LayoutMain>
            <TransitionPortal level="top">
                <MenuBar></MenuBar>
            </TransitionPortal>
        </S.LayoutWrapper>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
