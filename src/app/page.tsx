"use client"

import styles from "./page.module.css";
import LongText from "@/components/LongText";
import TypewriterText from "@/components/TypewriterText";
import homeImage from "@/assets/images/home.jpg";
import Image from "next/image";
import { useHomeContent } from "@/hooks/useContent";

export default function Home() {
  const content = useHomeContent();

  return (
    <div className={styles.page}>
      <main className={styles.main} data-container-home>
        <h1 style={{ display: 'none' }}>{content.seoTitle}</h1>
        <TypewriterText
          text={content.hero.typewriter}
          speed={100}
          as="h2"
        />
        <LongText>
          {content.intro.text}
        </LongText>

        <div className={styles.imageContainer}>
          <Image
            src={homeImage.src}
            alt="Foto de perfil de Gabriel Regis"
            className={styles.image}
            width={800}
            height={500}
          />
          <span className={styles.imageLabel}>
            {content.intro.imageLabel}{" "}
            <a
              href="https://www.ufba.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ufbaLink}
            >
              {content.intro.ufba}
            </a>
          </span>
        </div>
        <LongText>
          {content.summary.text}
        </LongText>
      </main>
    </div>
  );
}
