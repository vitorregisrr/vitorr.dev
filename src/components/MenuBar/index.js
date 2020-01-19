import React from 'react'

import Icons from './icons';

import * as S from './styled'

const MenuBar = () => {
    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink to="/" title="Voltar para home">
                    <S.MenuBarItem>
                        <Icons.Home />
                    </S.MenuBarItem>
                </S.MenuBarLink>

                <S.MenuBarLink to="/search" title="Pesquisar">
                    <S.MenuBarItem>
                        <Icons.Search />
                    </S.MenuBarItem>
                </S.MenuBarLink>

                <S.MenuBarLink to="/portfolio" title="Portfólio">
                    <S.MenuBarItem>
                        <Icons.Portrait />
                    </S.MenuBarItem>
                </S.MenuBarLink>
            </S.MenuBarGroup>

            <S.MenuBarGroup>
                <S.MenuBarItem title="Mudar o tema">
                    <Icons.Light />
                </S.MenuBarItem>
                <S.MenuBarItem title="Mudar visualização">
                    <Icons.Grid />
                </S.MenuBarItem>
                <S.MenuBarItem title="Ir para o topo">
                    <Icons.Arrow />
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
}

export default MenuBar;