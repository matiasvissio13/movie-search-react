function ListOfMovies ({ movies }){
    return (
        <ul className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between w-full max-w-[1050px] pb-20'>
            {
                movies.map((movie) => (
                    <li className='p-2 pb-10' key={movie.id}>
                        <img className='w-full h-auto min-h-[400px] object-cover shadow rounded-md' src={movie.image} alt={movie.title} />
                        <div className='text-center max-w-[240px] pt-2'>
                            <p className='font-mono text-sm'>{movie.year}</p>
                            <h2 className='font-bold pt-1'>{movie.title}</h2>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export function Movies({ movies }) {

    const hasMovies = movies?.length > 0

    return (
        <main className='flex justify-center' >
            {
                hasMovies
                    ? (
                        <ListOfMovies movies={movies} />
                    )
                    : (
                        <h2> No se encontraron peliculas para esta busqueda </h2>
                    )
            }
        </main >


    )
}