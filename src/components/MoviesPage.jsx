import { useEffect , useState } from 'react'
import { URL_DEFAULT, URL_GANRES, API_KEY } from '../config'
import Movie from './Movie'
import SearchMovie from './SearchMovie'

function MoviesPage() {
  const [genres, setGanres] = useState([])
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch(`${URL_GANRES}${API_KEY}`).then((response) =>
      response.json().then((genres) => setGanres(genres.genres))
    )
  }, [])
  useEffect(() => {
    fetch(`${URL_DEFAULT}/movie/top_rated${API_KEY}`).then((response) =>
      response.json().then((movie) => setMovies(movie))
    )
  }, [])
  const { results } = movies
  return (
    <div className="moviePage">
      <SearchMovie setMovies={setMovies}/>
      <div className="movieContainer">
        {results?.map((movie) => (
          <Movie movie={movie} genres={genres} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

export default MoviesPage
