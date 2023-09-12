// import { searchMovies } from './services/movies.js'
import { MovieList } from './components/MovieList'
import { Header } from './components/Header'
// import { Search } from './mocks/with-results.json'


// const newSearchMovie = await searchMovies({ search })

// console.log(Search)

function App() {
  return (
    <>
      <Header />
      <MovieList />
    </>
  )
}

export default App
