import React, {useState, createContext} from 'react'

export const MovieContext = createContext()

export const MovieController = (props) => {
    
    const [movies, setMovies] = useState([
        {
            name: 'Les visiteurs',
            price: '$2'
        },
        {
            name: 'Le hobbit',
            price: '$15'
        },
        {
            name: 'Asterix et Obelix',
            price: '$12'
        },
        {
            name: 'One piece',
            price: '$15'
        }
    ])
    
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
    
}

