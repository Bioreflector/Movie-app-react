import { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { URL_DEFAULT, URL_GANRES, API_KEY } from './config'
import MainLayout from './layout/MainLayout'
import MoviesPage from './components/MoviesPage'
import WatchList from './components/WatchList'
import AboutMovie from './components/AboutMovie'
import './App.css'

function App() {
  const [genres, setGanres] = useState([])
  const [movies, setMovies] = useState([])
  const [watchList, setWatchList] = useState([])
  console.log(watchList)
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

  const addToWatchListHandler = (movie) => {
    setWatchList([...watchList, { id: movie.id, title: movie.title }])
  }
  const deleteFromWatchListHandler = (id) => {
    const result = watchList.filter((movie) => movie.id !== id)
    setWatchList(result)
  }
  const isWatchlistIncludesMovieHandler = (id) => {
     return watchList.find((movie) => {
      console.log(movie)
       return movie.id === id
     })
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <MoviesPage
                  movies={movies}
                  setMovies={setMovies}
                  genres={genres}
                />
              }
            />
            <Route
              path="/:id"
              element={
                <AboutMovie
                  addToWatchList={addToWatchListHandler}
                  deleteFromWatchList={deleteFromWatchListHandler}
                  isWatchlistIncludesMovie={isWatchlistIncludesMovieHandler}
                />
              }
            />
            <Route path="watchlist" element={<WatchList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
