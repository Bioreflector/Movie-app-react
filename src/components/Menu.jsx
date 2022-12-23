import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">MoviesPage</Link>
        </li>
        <li>
          <Link to="/watchlist">WatchList</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
