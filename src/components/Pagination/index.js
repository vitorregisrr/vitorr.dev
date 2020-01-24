import React from 'react'
import TransitionLink from '../TransitionLink/'
import propTypes from 'prop-types';

import * as S from './styled'

const Pagination = ({
    isFirst,
    isLast,
    currentPage,
    numPages,
    prevPage,
    nextPage
}) => {
    return (
        <S.PaginationWrapper>
            {!isFirst && <TransitionLink to={prevPage}>← página anterior</TransitionLink>}
            <p>
                {currentPage} de {numPages}
            </p>
            {!isLast && <TransitionLink direction="right" to={nextPage}>proxima página →</TransitionLink>}
        </S.PaginationWrapper>
    )

}

Pagination.propTypes = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPages: propTypes.number.isRequired,
    prevPage: propTypes.string.isRequired,
    nextPage: propTypes.string.isRequired
}

export default Pagination;