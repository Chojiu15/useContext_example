import React, { useContext, useState } from 'react'
import { MovieContext } from '../context/MovieContext';

const AddMovie = () => {

    const [movies, setMovies] = useContext(MovieContext)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    const changeName = (e) => {
        setName(e.target.value)
    }

    const modifyMovie = (e) => {
        e.preventDefault()
        setMovies([...movies, {name : name, price : `$${price}`}])
    }

    console.log(name)
    return (
        <>
            <form onSubmit={modifyMovie}>
                <input value={name} onChange={changeName} required />
                <input value={price} onChange={(event) => setPrice(event.target.value)} required />
                <button type='submit'>
                    Add movie
                </button>
            </form>
        </>
    )
}

export default AddMovie