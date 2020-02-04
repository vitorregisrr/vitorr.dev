import React from 'react'
import PropTypes from 'prop-types'
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS
import {TransitionPortal} from 'gatsby-plugin-transition-link'

import Profile from '../Profile'
import SEO from '../SEO'
import GlobalStyles from '../../styles/global'
import * as S from './styled'
import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'

const Layout = ({seo, children}) => {
    const identity = useIdentityContext()
    const [dialog, setDialog] = React.useState(true)

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
            <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
        </S.LayoutWrapper>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
