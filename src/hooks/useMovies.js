import { useState, useEffect } from 'react'
import { queryMovies } from '../services/movies'

export function useMovies() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('batman')
    const [loading, setLoading] = useState(false)

    const queryFun = (query) => {
        setQuery(query)
    }

    useEffect(() => {
        async function fetchData() {

            try {
                setLoading(true)
                const moviesData = await queryMovies({ query })
                setMovies(moviesData)
            } catch (error) {
                console.error('Error searching movies:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [query]);

    return { movies, queryFun, loading }
}
