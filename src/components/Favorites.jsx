export const Favorites = ({ favMovies }) => {
    
    return (
        <section className="grid justify-center items-center">
            <h2 className="text-2xl text-center">Favorites Movies</h2>
            <ul className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between w-full max-w-[1050px] pb-20'>
                {
                    favMovies.map((movie) => (
                        <li className='p-2 pb-10' key={movie.id}>
                            {
                                movie.image !== 'N/A'
                                    ? (
                                        <img className='w-full h-[400px] object-cover shadow rounded-md' src={movie.image} alt={movie.title} />
                                    )
                                    : (
                                        <div className='flex justify-center items-center w-full h-auto min-h-[400px] bg-zinc-900 shadow rounded-md'>
                                            <p>This image don't found</p>
                                        </div>
                                    )
                            }

                            <div className='text-center p-2'>
                                <p className='font-mono text-sm'>{movie.year}</p>
                                <h2 className='font-bold pt-1'>{movie.title}</h2>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
} 