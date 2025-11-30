'use client';

import { useEffect, useState } from 'react';
import styles from './TypewriterText.module.scss';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export default function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  className = '',
  as: Component = 'span'
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(0);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }
  }, [delay]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && text.length > 0) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  return (
    <Component className={`${styles.typewriter} ${className}`}>
      <span className={styles.placeholder} aria-hidden="true">{text}</span>
      <span className={styles.content}>
        {displayedText}
        <span className={`${styles.cursor} ${isComplete ? styles.cursorBlink : ''}`}>|</span>
      </span>
    </Component>
  );
}
