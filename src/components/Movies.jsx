import { AiFillStar, AiOutlineStar } from "react-icons/ai";


function ListOfMovies({ movies, addFavMovie, removeFavMovie, favMovies }) {

    const cheackMovieInFav = movie => {
        return favMovies.some(item => item.id === movie.id)
    }

    return (
        <ul className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between w-full max-w-[1050px] pb-20'>
            {
                movies.map(movie => {
                    const isMovieInFav = cheackMovieInFav(movie)
                    return (
                        <li className='p-2 pb-10' key={movie.id}>
                            {
                                movie.image !== 'N/A'
                                    ? (
                                        <div className="relative">
                                            <img className='w-full h-[400px] object-cover shadow rounded-md' src={movie.image} alt={movie.title} />
                                            <button className="absolute top-3 right-3 rounded-full bg-slate-800 p-1 bg-opacity-40" onClick={() => isMovieInFav ? removeFavMovie(movie.id) : addFavMovie(movie.id)}>
                                                {/* <AiOutlineStar className="text-yellow-500" size={30} /> */}
                                                {
                                                    movie.favIcon ? (
                                                        <AiFillStar className="text-yellow-500" size={30} />
                                                    )
                                                        : (
                                                            <AiOutlineStar className="text-yellow-500" size={30} />
                                                        )
                                                }
                                            </button>
                                            <div className='text-center p-2'>
                                                <p className='font-mono text-sm'>{movie.year}</p>
                                                <h2 className='font-bold pt-1'>{movie.title}</h2>
                                            </div>
                                        </div>

                                    )
                                    : (
                                        <div className='flex justify-center items-center w-full h-auto min-h-[400px] bg-zinc-900 shadow rounded-md'>
                                            <p>This image don't found</p>
                                        </div>
                                    )
                            }


                        </li>
                    )
                })
            }
        </ul>
    )
}

export function Movies({ movies, addFavMovie, removeFavMovie, favMovies }) {

    const hasMovies = movies?.length > 0

    // movies.map((movie) => {
    //     console.log(movie)
    // })

    return (
        <main className='flex justify-center' >
            {
                hasMovies
                    ? (
                        <ListOfMovies movies={movies} addFavMovie={addFavMovie} removeFavMovie={removeFavMovie} favMovies={favMovies} />
                    )
                    : (
                        <h2> No se encontraron peliculas para esta busqueda </h2>
                    )
            }
        </main >


    )
}