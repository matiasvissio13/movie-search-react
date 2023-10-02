import { useState } from 'react'
// import { useSearch } from '../hooks/useSearch'

export function Header({ queryFun }) {

    // const { search, setSearch, error } = useSearch()
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // const fields = new window.FormData(e.target)
        // const query = fields.get('query')
        queryFun(search)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <header className='flex flex-col items-center pt-10 pb-14 gap-4'>
            <form onSubmit={handleSubmit} className="flex items-center gap-5">
                <input onChange={handleChange} value={search} name='search'
                    className='h-10 w-full sm:w-[300px] rounded px-3'
                    type="search" placeholder="Batman, Saw, Matrix..." />
                <button className="bg-blue-900 hover:bg-blue-800 rounded py-2 px-4" type='submit'>Search</button>
            </form>
            {/* <div className='h-4'>
                {error && <p className="text-center text-red-700 text-sm">{error}</p>}
            </div> */}
        </header>
    )
}