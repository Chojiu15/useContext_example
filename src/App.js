import React from 'react'
import MovieList from './components/MovieList';
import { MovieController } from './context/MovieContext'
import NavBar from './components/NavBar';
import AddMovie from './components/AddMovie';

const App = () => {

  return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

      <MovieController>
        <NavBar />
        <MovieList />
        <AddMovie />
      </MovieController>

    </div>
  )
}

export default App