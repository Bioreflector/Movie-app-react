import { Link, useParams } from 'react-router-dom'
import { URL_IMAGES, URL_DEFAULT, API_KEY } from '../config'
import styles from './AboutMovie.module.css'
import Button from '../UI/Button'
import { useState } from 'react'
import { useEffect } from 'react'
function AboutMovie() {
  const params = useParams()
  const { id } = params
  const [movie, setMovie] = useState(null)
  
  useEffect(() => {
    fetch(`${URL_DEFAULT}/movie/${id}${API_KEY}`)
      .then((response) => response.json())
      .then((movie) => setMovie(movie))
  }, [id])

  if (movie) {
    const { genres } = movie
    return (
      <>
        <h2 className={styles.movieTitle}>{movie.title}</h2>
        <div className={styles.aboutMovie}>
          <div>
            <img src={`${URL_IMAGES}${movie.poster_path}`} alt={movie.title} />
          </div>
          <div className={styles.aboutInf}>
            <p>{movie.overview}</p>
            <ul>
              <span>Ganre :</span>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <div className={styles.aboutActionBox}>
              <Link to="/" className={styles.linkHome}>
                Go Home
              </Link>
              <Button id={movie.id} title={movie.title}/>
            </div>
            <div className={styles.releaseAndRaitingBox}>
              <div className={styles.releaseDate}>
                Data release : {movie.release_date}
              </div>
              <div className={styles.ratingMovie}>
                Rating {movie.vote_average}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AboutMovie
