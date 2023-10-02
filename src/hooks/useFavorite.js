import { useState } from 'react'

export const useFavorite = ({ movies }) => {
    const [favMovies, setFavMovies] = useState([])

    const addFavMovie = (id) => {
        console.log("Add Movie")

        const newFav = favMovies

        const movieSelected = movies.find(item => item.id === id)

        movieSelected.favIcon = true

        const movie = favMovies.find(item => item.id === id)
        if (movie) return

        setFavMovies([...newFav, movieSelected])
    }

    const removeFavMovie = (id) => {
        const movieSelected = movies.find(item => item.id === id)
        movieSelected.favIcon = false

        setFavMovies(prevState => prevState.filter(item => item.id !== movieSelected.id))

        console.log("Delete Movie")
    }

    return { favMovies, addFavMovie, removeFavMovie }
}