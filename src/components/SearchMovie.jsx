import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import styles from './SearchMovie.module.css'

function SearchMovie({ setMovies }) {
  const [text, setText] = useState('')
  const getSearchMovie = (e) => {
    e.preventDefault()
    setText('')
    
  }
  return (
    <form action="" className={styles.formSearch}>
      <input
        type="text"
        placeholder="Search movie"
        onChange={(e) => setText(e.target.value)}
      />{' '}
      <button type="sumbit" onClick={(e) => getSearchMovie(e)} disabled={text.length > 2 ? false : true}>
        <BiSearch className={styles.serchIcon} />
        Search
      </button>
    </form>
  )
}

export default SearchMovie
