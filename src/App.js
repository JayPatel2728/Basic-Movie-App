import { useEffect, useState } from 'react'
import "./App.css";
import SearchIcon from "./search.svg"
import MovieCard from './components/MovieCard'

function App() {
  const API_URL = "http://www.omdbapi.com?apikey=b6003d8a"
  const [movies, setMovies]= useState([])
  const [search, setSearch]= useState("")

  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data= await response.json()
    setMovies(data.Search)
  }

  const movieMap=movies.map((movie)=>{
    return(
      <MovieCard
        movie={movie}
      />
    )
  })

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      searchMovies(search)
    }
  }

  useEffect(()=>{
    searchMovies('Batman')
  },[])

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className='search'>
        <input 
          placeholder='Search for movies'
          value={search}
          onKeyDown={handleKeyDown}
          onChange={(event)=> {setSearch(event.target.value)}}
        />
        <img 
          src={SearchIcon}
          alt="Search"
          onClick={()=> {searchMovies(search)}}
        />
      </div>

      {movies.length > 0?
        (
        <div className='container'>
            {movieMap}
        </div>
        ):
        (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
