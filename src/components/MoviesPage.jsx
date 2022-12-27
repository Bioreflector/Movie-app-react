import Movie from './Movie'
import SearchMovie from './SearchMovie'

function MoviesPage(props) {
  const { movies, setMovies, genres } = props
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
