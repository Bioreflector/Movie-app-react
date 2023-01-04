import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Context from './Context'
import MainLayout from './layout/MainLayout'
import MoviesPage from './components/MoviesPage'
import WatchList from './components/WatchList'
import AboutMovie from './components/AboutMovie'
import './App.css'

function App() {
  const [watchList, setWatchList] = useState([])
  const value = {
    watchList,
    setWatchList,
  }
  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<MoviesPage />} />
              <Route path="/:id" element={<AboutMovie />} />
              <Route path="watchlist" element={<WatchList />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
