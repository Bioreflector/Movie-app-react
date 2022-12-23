import { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { URL_DEFAULT, URL_GANRES, API_KEY} from './config'
import MainLayout from './layout/MainLayout'
import MoviesPage from './components/MoviesPage'
import WatchList from './components/WatchList'
import AboutMovie from './components/AboutMovie'
import './App.css'

function App() {
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

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MoviesPage  movies = {movies} setMovies={setMovies} genres={genres}/>} />
            <Route path='/:title' element={<AboutMovie movies={movies}/>}/>
            <Route path="watchlist" element={<WatchList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
