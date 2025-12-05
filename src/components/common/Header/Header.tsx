'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeProvider';
import { Moon, Sun, Globe, Home } from 'lucide-react';
import styles from './Header.module.scss';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.header__topbar}>
        <button
          onClick={() => router.push('/')}
          className={styles["header__home-button"]}
          aria-label={t('home')}
        >
          <Home size={20} />
        </button>

        <div className={styles.header__controls}>
          <button onClick={toggleTheme} className={styles["header__icon-button"]}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
            className={styles["header__icon-button"]}
          >
            <Globe size={18} />
            <span className={styles["header__lang-text"]}>{language === 'en' ? 'EN' : 'PT'}</span>
          </button>
        </div>
      </div>

      <nav className={styles.header__nav}>
        <button onClick={() => router.push('/')}>{t('home')}</button>
        <button onClick={() => router.push('/work')}>{t('work')}</button>
        <button onClick={() => router.push('/bookmarks')}>{t('bookmarks')}</button>
        <button onClick={() => router.push('/about')}>{t('about')}</button>
        <button onClick={() => router.push('/projects')}>{t('projects')}</button>

      </nav>
      <div className={styles.header__controlsDesktop}>
        <button onClick={toggleTheme} className={styles["header__icon-button"]}>
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        <button
          onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
          className={styles["header__icon-button"]}
        >
          <Globe size={18} />
          <span className={styles["header__lang-text"]}>{language === 'en' ? 'EN' : 'PT'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
