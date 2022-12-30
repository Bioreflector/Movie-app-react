import { useEffect } from 'react'
import Menu from './Menu'
import styles from './Header.module.css'
import { useState } from 'react'
function Header() {
  const [scrol, setScrol] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrol(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={scrol ? `${styles.header} ${styles.hide}`:`${styles.header}`}>
      <h1>Movie App</h1>
      <Menu />
    </header>
  )
}

export default Header
