import Movie from './Movie'

function MoviesPage(props) {
  const { movies, setMovies, genres } = props
  const { results } = movies
  return (
    <div className="moviePage">
      {results?.map((movie) => (
        <Movie movie={movie} genres = {genres} key={movie.id}/>
      ))}
    </div>
  )
}

export default MoviesPage
