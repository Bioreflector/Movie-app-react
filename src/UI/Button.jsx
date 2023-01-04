import { useContext } from 'react'
import styles from './Button.module.css'
import Context from '../Context'


function Button(props) {
  const value = useContext(Context)
  const {watchList , setWatchList} = value
  const { id, title,} = props

  const isWachList = () =>{
    return watchList.find((movie) => movie.id === id)
  }
  const addToWachList = () =>{
    setWatchList([...watchList , {id:id , title:title}])
  }
  const deleteFromWachList = () =>{
    const result = watchList.filter((movie) => movie.id !== id)
    setWatchList(result)
  }
  return (
    <button className={styles.button} onClick={() => isWachList() ? deleteFromWachList():addToWachList()}>{isWachList() ? "Remove from WachList" : "Add to WatchList"}</button>
  )
}

export default Button
