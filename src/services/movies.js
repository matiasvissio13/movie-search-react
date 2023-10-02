const API_KEY = '32b52e62'

// https://www.omdbapi.com/

export const queryMovies = async ({ query }) => {
    if (query === '') return null

    try {
        const resp = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
        const json = await resp.json()

        const movies = json.Search
        
        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster,
            favIcon: false
        }))
    } catch (e) {
        throw new Error('Error searching movies')
    }
}