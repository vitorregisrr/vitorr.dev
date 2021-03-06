import React, {useState, useEffect} from 'react'

import Icons from './icons';

import * as S from './styled'

const MenuBar = () => {
    const [theme,
        setTheme] = useState('light')

    const [_null,
        setDisplay] = useState('grid')

    const isDarkMode = theme === 'dark';
    const isListMode = theme === 'list';

    useEffect(() => {
        setTheme(window.__theme);
        window.__onThemeChange = () => setTheme(window.__theme);

        setDisplay(window.__display);
        window.__onDisplayChange = () => {
            setDisplay(window.__display);
        }
        if (window.matchMedia('(max-width: 1170px)').matches) {
            setDisplay('grid');
            window.__setPreferredDisplay('grid');
        }

    }, [])

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink to="/" title="Voltar para home">
                    <S.MenuBarItem>
                        <Icons.Home/>
                    </S.MenuBarItem>
                </S.MenuBarLink>

                <S.MenuBarLink to="/search" title="Pesquisar">
                    <S.MenuBarItem>
                        <Icons.Search/>
                    </S.MenuBarItem>
                </S.MenuBarLink>

                <S.MenuBarLink to="/portfolio" title="Portfólio" className="portfolio">
                    <S.MenuBarItem>
                        <Icons.Portrait/>
                    </S.MenuBarItem>
                </S.MenuBarLink>
            </S.MenuBarGroup>

            <S.MenuBarGroup>
                <S.MenuBarItem
                    title="Mudar o tema"
                    className={window.__theme}
                    onClick={() => {
                    window.__setPreferredTheme(isDarkMode
                        ? 'light'
                        : 'dark')
                }}>
                    <Icons.Light/>
                </S.MenuBarItem>
                <S.MenuBarItem
                    className="display"
                    title="Mudar visualização"
                    onClick={() => {
                    window.__setPreferredDisplay(isListMode
                        ? 'grid'
                        : 'list')
                }}>

                    {window.__display == 'list'
                        ? <Icons.Grid/>
                        : <Icons.List/>}
                </S.MenuBarItem>
                <S.MenuBarItem title="Ir para o topo">
                    <Icons.Arrow/>
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
}

export default MenuBar;