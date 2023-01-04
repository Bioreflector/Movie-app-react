import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../Context'
import Button from '../UI/Button'
import styles from './WatchList.module.css'

function WatchList() {
  const value = useContext(Context)
  const { watchList } = value
  return (
    <div className={styles.watchList}>
      <h2>Watch List</h2>

      <ul>
        {watchList.map((movie) => {
          return (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <div className={styles.actionBox}>
                <Link to={`/${movie.id}`}>About movie</Link>
                <Button id={movie.id}></Button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default WatchList
