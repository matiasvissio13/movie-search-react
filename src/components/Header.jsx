export function Header() {

    const handleSearch = (e) => {
        e.preventDefault()
    }

    return (
        <header className='flex flex-col items-center py-5 gap-10'>
            <h1 className="text-6xl">Movie Search</h1>
            <form className="flex items-center gap-5">
                <input className="h-10 w-full sm:w-[300px] rounded px-3" type="search" placeholder="Batman, El Conjuro, Matrix..." />
                <button onClick={handleSearch} className="bg-blue-900 hover:bg-blue-800 rounded py-2 px-4" type='submit'>Search</button>
            </form>
        </header>
    )
}