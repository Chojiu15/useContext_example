import React, { useState, useContext } from 'react'
import Movie from './Movie';
import { MovieContext } from '../context/MovieContext';


const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext)


    return (
        <>
            {movies.map(e => {
                return <Movie {...e} />
            })}

        </>
    )
}

export default MovieList