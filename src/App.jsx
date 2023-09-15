import { Movies } from './components/Movies'
import { Header } from './components/Header'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies, searchFun } = useMovies()

  return (
    <>
      <Header searchFun={searchFun} />
      <Movies movies={movies} />
    </>
  )
}

export default App
