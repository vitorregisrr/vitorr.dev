import React from 'react'
import ReactWOW from 'react-wow'

import * as S from './styled'

const PostContent = ({date, timeToRead, html, description, title}) => {
    return(
        <>
        <S.PostHeader>
              <ReactWOW animation='fadeInUp'>
                <S.PostDate>
                    {date} • {timeToRead} min de leitura
                </S.PostDate>
              </ReactWOW>
              <ReactWOW animation='fadeInUp'>
            <S.PostTitle>{title}</S.PostTitle>
            </ReactWOW>
            <ReactWOW animation='fadeInUp'>
              <S.PostDescription>{description}</S.PostDescription>
            </ReactWOW>
        </S.PostHeader>
        <ReactWOW animation='fadeIn' delay='0.2s'>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </S.MainContent>
        </ReactWOW>
        </>
    )
}

export default PostContent;