import { Link } from 'react-router-dom'
import { URL_IMAGES } from '../config'
import { selectGanres } from '../helpers'
import Button from '../UI/Button'
import styles from './Movie.module.css'
function Movie(props) {
  const { movie, genres } = props
  const genresMovie = selectGanres(movie , genres)
  return (
    <div className={styles.movieCard}>
      <div className={styles.posterBox}>
        <img src={`${URL_IMAGES}${movie.poster_path}`} alt="" />
      </div>
      <div className={styles.movieInf}>
        <h2>{movie.title}</h2>
        <ul className={styles.movieGenre}>
          <span>Ganre :</span>
          {genresMovie.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      <div>Raiting {movie.vote_average}</div>
      <div className={styles.cardActionBox}>
      <Link to={`/${movie.title}`} className={styles.cardLink}>About movie</Link>
      <Button>Add Watchlist</Button>
      </div>
        
      </div>
    </div>
  )
}

export default Movie
