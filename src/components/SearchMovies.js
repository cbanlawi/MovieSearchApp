import React, { useState } from 'react'
import MovieCard from './MovieCard'

function SearchMovies(props) {
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])

    const searchMovies = async (event) => {
        event.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=72adce472e3f05f6b1561b1b15d4e21f&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const response = await fetch(url)
            const data = await response.json()
            setMovies(data.results)
        } catch(err) {
            console.error(err)
        }

    } 

    return (
        <>
            <form action="" onSubmit={searchMovies} className="form">
                <label
                    htmlFor="query"
                    className="label"
                >Movie Name: </label>
                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder="eg. The Wizard of Oz"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button type="submit" className="button">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </>
    )
}

export default SearchMovies