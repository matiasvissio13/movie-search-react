import { useState, useEffect } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('fast')
        
    const searchFun = (search) => {
        console.log(search)
        setSearch(search)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const moviesData = await searchMovies({ search })
                setMovies(moviesData)
            } catch (error) {
                console.error('Error searching movies:', error)
            }
        }

        fetchData()
    }, [search]);

    return { movies, searchFun }
}
