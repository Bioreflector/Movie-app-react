import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../Context'
import Button from '../UI/Button'
import styles from './WatchList.module.css'

function WatchList() {
  const value = useContext(Context)
  const { watchList } = value
  const numbersOfMovie = watchList.length
  return (
    <div className={styles.watchList}>
      <h2>Watch List</h2>
      <div className={styles.statusWatclist}>{numbersOfMovie ===0 ? 'Watch list is epty' : `Watch list has ${numbersOfMovie} ${numbersOfMovie > 1 ? 'movies':'movie'}` }</div>
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
