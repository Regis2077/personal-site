
import Link from "next/link"
import styles from "./Navbar.module.scss"
import ThemeToggleButton from "../ThemeToggleButton"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className="logo">Regis</h1>
      <div className={styles.navbar__menu}>
        <ThemeToggleButton />
        <ul>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/work">Work</Link></li>
          <li><Link href="/projects">Projetos</Link></li>
          <li><Link href="/articles">Artigos</Link></li>
        </ul>
      </div>
    </nav>
  )
}
