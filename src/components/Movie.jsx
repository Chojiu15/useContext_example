import React from 'react'

const Movie = ({name, price}) => {
    return(
        <>
        <h1>{name}</h1>
        <p>{price}</p>
        </>
    )
}

export default Movie