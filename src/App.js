import { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { URL_DEFAULT, URL_GANRES, API_KEY, URL_IMAGES } from './config'
import MainLayout from './layout/MainLayout'
import Home from './components/Home'
import WatchList from './components/WatchList'
import './App.css'

function App() {
  const [genres, setGanres] = useState([])
  const [movie, setMovie] = useState([])
  useEffect(() => {
    fetch(`${URL_GANRES}${API_KEY}`).then((response) =>
      response.json().then((genres) => setGanres(genres.genres))
    )
  }, [])
  useEffect(() => {
    fetch(`${URL_DEFAULT}/movie/top_rated${API_KEY}`).then((response) =>
      response.json().then((movie) => setMovie(movie))
    )
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="watchlist" element={<WatchList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
