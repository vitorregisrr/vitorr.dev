import React from 'react'

import links from './content'
import Icons from './icons'

import * as S from './styled'

const SocialLinks = () => {
    return (
        <S.SocialLinksWrapper>
            <S.SocialLinksList>
                {links.map(link => {
                    const Icon = Icons[link.label]
                    return (
                        <S.SocialLinksItem key={'ico-' + link.label}>
                            <S.SocialLinksLink
                                title={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer">
                                <S.IconWrapper>
                                    <Icon/>
                                </S.IconWrapper>
                            </S.SocialLinksLink>
                        </S.SocialLinksItem>
                    )
                })
}
            </S.SocialLinksList>
        </S.SocialLinksWrapper>
    )
}

export default SocialLinks;