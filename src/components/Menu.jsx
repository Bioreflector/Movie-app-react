import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li >
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
