import { Movies } from './components/Movies'
import { Header } from './components/Header'
import { useFavorite } from './hooks/useFavorite'
import { useMovies } from './hooks/useMovies'
import { Spinner } from './assets/Spinner'
import { Favorites } from './components/Favorites'
// import { useState } from 'react'

function App() {
  const { movies, queryFun, loading } = useMovies()
  const { favMovies, addFavMovie, removeFavMovie } = useFavorite({movies})

  return (
    <>
      <Header queryFun={queryFun} />

      {
        loading
          ? (<div className='text-center'><Spinner /></div>)
          : (<Movies movies={movies} addFavMovie={addFavMovie} removeFavMovie={removeFavMovie} favMovies={favMovies} />)
      }

      <Favorites favMovies={favMovies}/>
    </>
  )
}

export default App
