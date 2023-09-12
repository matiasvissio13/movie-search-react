import { Search } from '../mocks/with-results.json'

export function MovieList() {
    return (
        <main className='flex justify-center'>
            <ul className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between w-full max-w-[1050px] pb-20'>
                {
                    Search.map((movie) => (
                        <li className='p-2 pb-10' key={movie.imdbID}>
                            <img className='w-full h-auto min-h-[400px] object-cover shadow rounded-md' src={movie.Poster} alt={movie.Title} />
                            <div className='text-center max-w-[240px] pt-2'>
                                <p className='font-mono text-sm'>{movie.Year}</p>
                                <h2 className='font-bold pt-1'>{movie.Title}</h2>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}