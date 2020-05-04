import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext';

const NavBar = () => {

    const [test, settest] = useContext(MovieContext)

    return(
        <>
            <h1>Il y a {test.length} films actuellement en salle</h1>

        </>
    )
}

export default NavBar