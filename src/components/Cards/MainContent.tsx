'use client'
import * as React from 'react';

import { useThemeColors } from '@/context/ThemeProvider';
import { useProjectsContent } from '@/hooks/useContent';

import styles from './cards.module.scss';

export default function MainContent() {
  const colors = useThemeColors();
  const projetctData = useProjectsContent().list;

  return (
    <div className={styles.projects}>
      <div className={styles.projects__container}>
        {projetctData.map((project, index) => (
          <div
            key={project.id}
            className={styles.card}
            style={{
              backgroundColor: colors.backgroundColor,
              borderColor: colors.borderColor,
              color: colors.textColor,
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className={styles.card__content}>
              <div className={styles.card__header}>
                <h2 className={styles.card__title}>
                  {project.title}
                </h2>
                <div className={styles.card__links}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.card__link}
                    aria-label="View on GitHub"
                    style={{ color: colors.textColor }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.card__icon}>
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a
                    href={project.deployUrl ?? ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.card__link}
                    aria-label="View demo"
                    style={{ color: colors.textColor }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.card__icon}>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <p className={styles.card__description}>
                {project.description}
              </p>
              <div className={styles.card__technologies}>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={styles.card__tech}
                    style={{
                      backgroundColor: colors.backgroundColor,
                      color: colors.textColor
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}