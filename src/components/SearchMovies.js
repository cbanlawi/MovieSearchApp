import React from 'react'

function SearchMovies(props) {
    
    const searchMovies = async (event) => {
        event.preventDefault()

        console.log("submitting")

        const url = "https://api.themoviedb.org/3/movie/550?api_key=72adce472e3f05f6b1561b1b15d4e21f"
    } 

    return (
        <form action="" onSubmit={searchMovies} className="form">
            <label htmlFor="query" className="label">Movie Name: </label>
            <input type="text" name="query" id="" className="input" placeholder="eg. Star Wars"/>
            <button type="submit" className="button">Search</button>
        </form>
    )
}

export default SearchMovies