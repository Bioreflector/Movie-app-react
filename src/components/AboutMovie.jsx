import { useParams } from 'react-router-dom'
import { URL_IMAGES } from '../config'
import { selectGanres } from '../helpers'
function AboutMovie(props) {
  const { movies, genres } = props
  const { results } = movies
  const params = useParams()
  const aboutMovie = results?.find((movie) => movie.title === params.title)
  console.log(aboutMovie)

  if (aboutMovie) {
    return (
      <div className="aboutMovie">
        <div className="posterBox">
          <img src={`${URL_IMAGES}${aboutMovie.poster_path}`} />
        </div>
        <div className="aboutInfo">
          <h1>{aboutMovie.title}</h1>
          <p>{aboutMovie.overview}</p>
        </div>
      </div>
    )
  }
}

export default AboutMovie
