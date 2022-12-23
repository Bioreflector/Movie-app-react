import { useParams } from "react-router-dom"
import { selectGanres } from "../helpers"
function AboutMovie(props) {
  const {movies , genres} = props
  const { results } = movies
  const params = useParams()
  console.log(params)
  // const aboutMovie = results.filter(movie => movie.title === params.title)
  // console.log(aboutMovie)
  return (
    <div className="aboutMovie">
      <div className="posterBox">
        {/* <img src={`${URL_IMAGES}${aboutMovie.poster_path}`} /> */}
      </div>
    </div>
  )
}

export default AboutMovie