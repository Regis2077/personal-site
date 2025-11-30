"use client";

import { Book, Headphones, Plane, Code2, Waves, Film, Landmark } from 'lucide-react';
import vitoria from '@/assets/images/vitoria.svg';
import Image from 'next/image';

import styles from './About.module.scss';
import LongText from '../LongText';

const hobbies = [
  {
    icon: Code2,
    title: 'Pensando em algum projeto',
    description: 'É contráditório com o título mas só quem é dev vai entender',
  },
  {
    icon: Book,
    title: 'Lendo',
    description: 'Lendo sobre filosofia, literatura brasileira ou estrangeira e coisas que me interessam',
  },
  {
    icon: vitoria,
    title: 'No Barradão',
    description: 'Muito provavelmente você irá me encontrar no Estádio Manoel Barradas em dias de jogo do Esporte Clube Vitória',
  },
  {
    icon: Headphones,
    title: 'Ouvindo ou estudando música',
    description: 'Ou fazendo alguma playlist no spotify. [Meu Last.fm](https://last.fm/user/gbrregis)',
  },
  {
    icon: Plane,
    title: 'Viajando',
    description: 'Conhecendo algum lugar desse mundo massa e enorme.',
  },
  {
    icon: Waves,
    title: 'Na praia',
    description: 'Afinal não nasci em salvador a toa.',
  },
  {
    icon: Film,
    title: 'No cinema',
    description: 'E enchendo o saco da minha esposa sobre curiosidades que ele não perguntou sobre diretores e cinefilia.',
  },
  {
    icon: Landmark,
    title: 'Em algum Museu',
    description: 'Tenho mais fotos de museus que minhas no celular.',
  },
];

interface AboutProps {
  hobbiesTitle?: string;
}

export default function About({ hobbiesTitle = 'Hobbies & Interests' }: AboutProps) {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.content}>
        <div className={styles.sections}>
          <div className={styles.hobbiesSection}>
            <h2 className={styles.hobbiesTitle}>
              {hobbiesTitle}
            </h2>

            <div className={styles.hobbiesGrid}>
              {hobbies.map((hobby, index) => {
                const Icon = hobby.icon;
                return (
                  <div
                    key={hobby.title}
                    className={styles.hobbyItem}
                    style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                  >
                    <div className={styles.hobbyHeader}>
                      {hobby.title === "No Barradão" ? (
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
