import React from 'react'
import ReactWOW from 'react-wow'
import PropTypes from 'prop-types';

import * as S from './styled'

const PostItem = ({
    slug,
    category,
    background,
    date,
    timeToRead,
    title,
    description
}) => {
    return (
        <ReactWOW animation='fadeInUp'>
            <S.PostItemLink to={slug}>
                <S.PostItemWrapper>
                    <S.PostItemTag background={background}>
                        <ReactWOW animation='zoomIn'>
                            <div>
                                {category}
                            </div>
                        </ReactWOW>
                    </S.PostItemTag>

                    <S.PostItemInfo>
                        <S.PostItemDate>{date}
                            - {timeToRead}min de leitura</S.PostItemDate>
                        <S.PostItemTitle>{title}</S.PostItemTitle>
                        <S.PostItemDescription>{description}</S.PostItemDescription>
                    </S.PostItemInfo>
                </S.PostItemWrapper>
            </S.PostItemLink>
        </ReactWOW>
    )
}

PostItem.propTypes = {
    slug: PropTypes.string.isRequired,
    background: PropTypes.string,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default PostItem;
