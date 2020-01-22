import React from 'react'
import PostItem from '../PostItem'

const Hit = ({hit}) => {
    return(
        <PostItem
            slug={hit.fields.slug}
            title={hit.title}
            description={hit.description}
            background={hit.background}
            category={hit.category}
            date={hit.date} />
    )
}

export default Hit