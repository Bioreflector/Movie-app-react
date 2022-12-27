import { useEffect } from 'react'
import Menu from './Menu'
import styles from './Header.module.css'
import { useState } from 'react'
function Header() {
  const [isScroling, setIsScroling] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setIsScroling(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
  }, [])
  console.log(isScroling)
  return (
    <header className={isScroling ? `${styles.header} ${styles.hide}`:`${styles.header}`}>
      <h1>Movie App</h1>
      <Menu />
    </header>
  )
}

export default Header
