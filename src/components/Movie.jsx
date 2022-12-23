import { Link } from 'react-router-dom'
import { URL_IMAGES } from '../config'
import { selectGanres } from '../helpers'
function Movie(props) {
  const { movie, genres } = props
  const genresMovie = selectGanres(movie , genres)
  return (
    <div className="moveCard">
      <div className="poserBox">
        <img src={`${URL_IMAGES}${movie.poster_path}`} alt="" />
      </div>
      <div className="movieInformarion">
        <h2>{movie.title}</h2>
        <div className="movieGanre">
          Ganre :{' '}
          {genresMovie.map((ganre) => (
            <span key={ganre.id}>{ganre.name}</span>
          ))}
          <Link to={`/${movie.original_title}`}>Read more</Link>
        </div>
      </div>
    </div>
  )
}

export default Movie
