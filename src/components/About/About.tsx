"use client";

import { Book, Headphones, Plane, Code2, Waves, Film, Landmark } from 'lucide-react';
import vitoria from '@/assets/images/vitoria.svg';
import Image from 'next/image';
import { Hobby } from '@/i18n/types';

import styles from './About.module.scss';
import LongText from '../LongText';

const getIconForHobby = (title: string) => {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes('projeto') || lowerTitle.includes('project')) return Code2;
  if (lowerTitle.includes('lendo') || lowerTitle.includes('reading')) return Book;
  if (lowerTitle.includes('barradão')) return vitoria;
  if (lowerTitle.includes('música') || lowerTitle.includes('music')) return Headphones;
  if (lowerTitle.includes('viajando') || lowerTitle.includes('traveling')) return Plane;
  if (lowerTitle.includes('praia') || lowerTitle.includes('beach')) return Waves;
  if (lowerTitle.includes('cinema')) return Film;
  if (lowerTitle.includes('museu') || lowerTitle.includes('museum')) return Landmark;

  return Code2; // default icon
};

interface AboutProps {
  hobbiesTitle?: string;
  hobbiesItems: Hobby[];
}

export default function About({ hobbiesTitle = 'Hobbies & Interests', hobbiesItems }: AboutProps) {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.content}>
        <div className={styles.sections}>
          <div className={styles.hobbiesSection}>
            <h2 className={styles.hobbiesTitle}>
              {hobbiesTitle}
            </h2>

            <div className={styles.hobbiesGrid}>
              {hobbiesItems.map((hobby, index) => {
                const icon = getIconForHobby(hobby.title);
                const Icon = icon;
                const isVitoriaIcon = icon === vitoria;

                return (
                  <div
                    key={hobby.title}
                    className={styles.hobbyItem}
                    style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                  >
                    <div className={styles.hobbyHeader}>
                      {isVitoriaIcon ? (
                        <Image src={vitoria} alt="" width={24} height={24} />
                      ) : (
                        <Icon className={styles.hobbyIcon} />
                      )}
                      <h3 className={styles.hobbyTitle}>{hobby.title}</h3>
                    </div>
                    <LongText>
                      {hobby.description}
                    </LongText>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
