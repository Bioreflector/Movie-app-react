import { Link, useParams } from 'react-router-dom'
import { URL_IMAGES } from '../config'
import styles from './AboutMovie.module.css'
import { selectGanres } from '../helpers'
import Button from '../UI/Button'
function AboutMovie(props) {
  const { movies, genres } = props
  const { results } = movies
  const params = useParams()
  const aboutMovie = results
    ? results.find((movie) => movie.title === params.title)
    : null
  const genresMovie = aboutMovie ? selectGanres(aboutMovie, genres) : []
  console.log(aboutMovie)

  if (aboutMovie) {
    return (
      <>
      <h2 className={styles.movieTitle}>{aboutMovie.title}</h2>
      <div className={styles.aboutMovie}>
        <div>
          <img src={`${URL_IMAGES}${aboutMovie.poster_path}`} />
        </div>
        <div className={styles.aboutInf}>
          <p>{aboutMovie.overview}</p>
          <ul>
            <span>Ganre :</span>
            {genresMovie.length > 0 &&
              genresMovie.map((genre) => <li key={genre.id}>{genre.name}</li>)}
          </ul>
          <div className={styles.aboutActionBox}>
            <Link to='/' className={styles.linkHome}>
              Go Home
            </Link>
            <Button>Add Watch List</Button>
          </div>
          <div className={styles.releaseAndRaitingBox}>
            <div className={styles.releaseDate}>
              Data release : {aboutMovie.release_date}
            </div>
            <div className={styles.ratingMovie}>
              Rating {aboutMovie.vote_average}
            </div>
          </div>
        </div>
      </div>
      </>
      
    )
  }
}

export default AboutMovie
