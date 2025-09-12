"use client";

import Link from "next/link"
import styles from "./Navbar.module.scss"
import ThemeToggleButton from "@/components/ThemeToggleButton"
import { useThemeColors } from "@/app/context/themeProvider"

export default function Navbar() {
  const colors = useThemeColors();

  return (
    <nav 
      className={styles.navbar}
      style={{
        backgroundColor: colors.backgroundColor,
        color: colors.textColor,
        borderBottom: `1px solid ${colors.borderColor}`
      }}
    >
      <ThemeToggleButton />
      <div className={styles.navbar__menu}>
        <ul>
          <li>
            <Link 
              href="/"
              style={{ color: colors.textColor }}
            >
              Início
            </Link>
          </li>
          <li>
            <Link 
              href="/work"
              style={{ color: colors.textColor }}
            >
              Work
            </Link>
          </li>
          <li>
            <Link 
              href="/projects"
              style={{ color: colors.textColor }}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link 
              href="/articles"
              style={{ color: colors.textColor }}
            >
              Artigos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
