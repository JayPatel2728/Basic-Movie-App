import { useEffect, useState } from 'react'
import "./App.css";
import SearchIcon from "./search.svg"
import MovieCard from './components/MovieCard'
import MoviePage from './components/MoviePage'
import { nanoid } from "nanoid"

function App() {
  const API_URL = "https://www.omdbapi.com?apikey=b6003d8a"
  const [movies, setMovies]= useState([])
  const [search, setSearch]= useState("")
  const [selectMovie, setSelectedMovie]= useState({})
  const [movieSelected, setMovieSelected]= useState(false)

  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data= await response.json()
    setMovies(data.Search)
  }

  const movieMap=movies.map((movie)=>{
    return(
      <MovieCard
        movie={movie}
        handleChange={()=> {
          setMovieSelected(prev=> !prev)
          setSelectedMovie(movie)
        }}
        id= {nanoid()}
      />
    )
  })

  console.log(selectMovie)

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      searchMovies(search)
    }
  }

  useEffect(()=>{
    searchMovies('Batman')
  },[])

  return (
    movieSelected?
    <MoviePage movie={selectMovie}/>
    :
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
