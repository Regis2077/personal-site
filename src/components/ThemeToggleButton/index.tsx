"use client";

import { useTheme, useThemeColors } from "@/context/ThemeProvider";
import styles from "./ThemeToggleButton.module.scss";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const colors = useThemeColors();

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggleButton}
      data-theme={theme}
      title={`Alternar para tema ${theme === "light" ? "escuro" : "claro"}`}
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={colors.textColor}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.sunIcon}
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={colors.textColor}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.moonIcon}
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      )}
    </button>
  );
}
export default ThemeToggleButton;
