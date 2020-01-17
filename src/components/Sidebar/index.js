import React from 'react'

import * as S from './styled';

const Sidebar = ({children}) => {
    return(
        <S.SidebarWrapper>
            {children}
        </S.SidebarWrapper>
    )
}

export default Sidebar;