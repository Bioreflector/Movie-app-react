import { useEffect } from 'react'
import { useState } from 'react'
import { URL_DEFAULT, URL_GANRES, API_KEY, URL_IMAGES } from './config'
import './App.css'

function App() {
  const [genres, setGanres] = useState([])
  useEffect(() => {
    fetch(`${URL_GANRES}${API_KEY}`).then((response) =>
      response.json().then((genres) => setGanres(genres.genres))
    )
  }, [])

  return <div className="App"></div>
}

export default App
