import React from 'react'

import links from './content'

import * as S from './styled'

const MenuLinks = () => {
    return (
        <S.MenuLinksWrappper>
            <S.MenusLinkList>
                {links.map(link => (
                    <S.MenusLinkItem key={'link-to-' + link.label}>
                        <S.MenuLinksLink
                            activeClassName="active"
                            to={link.url}>{link.label}</S.MenuLinksLink>
                    </S.MenusLinkItem>
                ))
}
            </S.MenusLinkList>
        </S.MenuLinksWrappper>
    )
}

export default MenuLinks;