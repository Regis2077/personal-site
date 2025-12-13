'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeProvider';
import { Moon, Sun, Globe, Home } from 'lucide-react';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.header__topbar}>
        <Link
          href="/"
          className={styles["header__home-button"]}
          aria-label={t('home')}
        >
          <Home size={20} />
        </Link>

        <div className={styles.header__controls}>
          <button
            onClick={toggleTheme}
            className={styles["header__icon-button"]}
            aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
            className={styles["header__icon-button"]}
            aria-label={language === 'en' ? 'Mudar para português' : 'Switch to English'}
          >
            <Globe size={18} />
            <span className={styles["header__lang-text"]}>{language === 'en' ? 'EN' : 'PT'}</span>
          </button>
        </div>
      </div>

      <nav className={styles.header__nav} aria-label="Navegação principal">
        <Link href="/">{t('home')}</Link>
        <Link href="/work">{t('work')}</Link>
        <Link href="/bookmarks">{t('bookmarks')}</Link>
        <Link href="/about">{t('about')}</Link>
        <Link href="/projects">{t('projects')}</Link>
      </nav>

      <div className={styles.header__controlsDesktop}>
        <button
          onClick={toggleTheme}
          className={styles["header__icon-button"]}
          aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        <button
          onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
          className={styles["header__icon-button"]}
          aria-label={language === 'en' ? 'Mudar para português' : 'Switch to English'}
        >
          <Globe size={18} />
          <span className={styles["header__lang-text"]}>{language === 'en' ? 'EN' : 'PT'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
