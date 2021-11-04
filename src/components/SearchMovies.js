import React, { useState } from 'react'

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
                    <div className="card" key={movie.id}>
                        <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + " poster"} />
                        <div className="card--content">
                            <h3 className="card--title">{movie.title}</h3>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}</small></p>
                            <p className="card--description">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SearchMovies