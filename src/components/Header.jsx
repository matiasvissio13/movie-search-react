import { useState } from "react"

export function Header({ searchFun }) {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        searchFun(search)
        console.log(`handleSearch: ${search}`)
    }

    const handleChange = (e) => {
        const newSearch = e.target.value
        setSearch(newSearch)
        console.log(`handleChange: ${newSearch}`)
    }

    return (
        <header className='flex flex-col items-center pt-10 pb-16 gap-10'>
            <form onSubmit={handleSearch} className="flex items-center gap-5">
                <input onChange={handleChange} value={search} className="h-10 w-full sm:w-[300px] rounded px-3" type="search" placeholder="Batman, El Conjuro, Matrix..." />

                <button className="bg-blue-900 hover:bg-blue-800 rounded py-2 px-4" type='submit'>Search</button>
            </form>
        </header>
    )
}