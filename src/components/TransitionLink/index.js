import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import getThemeColor from '../../utils/getThemeColor'

const TransitionLink = ({children, direction, to, className}) => {
    return (
        <AniLink
            to={to}
            cover
            direction={direction || 'left'}
            bg={getThemeColor()}
            duration={0.6}
            activeClassName="active"
            className={className}>
            {children}
        </AniLink>
    )
}

export default TransitionLink;