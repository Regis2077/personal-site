'use client'
import * as React from 'react';
import styles from './cards.module.scss';
import projectData from '@/content/pt/projects.json';
import { useThemeColors } from '@/app/context/themeProvider';
import Image from 'next/image';

export default function MainContent() {
  const colors = useThemeColors();

  return (
    <div className={styles.projects}>
      <div className={styles.projects__container}>
        {projectData.map((project) => (
          <div key={project.id} className={styles.projects__item}>
            <div 
              className={styles.card}
              style={{
                backgroundColor: colors.backgroundColor,
                borderColor: colors.borderColor,
                color: colors.textColor
              }}
            >
              <Image 
                src={project.image} 
                alt={project.title}
                className={styles.card__image}
                width={100}
                height={100}
              />             
              <div className={styles.card__content}>
                <h2 
                  className={styles.card__title}
                  style={{ color: colors.textColor }}
                >
                  {project.title}
                </h2>
                
                <p 
                  className={styles.card__description}
                  style={{ color: colors.textColor }}
                >
                  {project.description}
                </p>
                <div className={styles.card__technologies}>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={styles.card__tech}
                      style={{
                        color: colors.textColor,
                        borderColor: colors.borderColor
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>                
                <div className={styles.card__actions}>
                  <a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.card__button} ${styles['card__button--deploy']}`}
                    style={{
                      color: colors.textColor,
                      borderColor: colors.borderColor,
                      backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.textColor;
                      e.currentTarget.style.color = colors.backgroundColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = colors.textColor;
                    }}
                  >
                    Deploy
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.card__button} ${styles['card__button--source']}`}
                    style={{
                      color: colors.textColor,
                      borderColor: colors.borderColor,
                      backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.textColor;
                      e.currentTarget.style.color = colors.backgroundColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = colors.textColor;
                    }}
                  >
                    Source
                  </a>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}