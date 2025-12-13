"use client"

import styles from "./page.module.css";
import LongText from "@/components/LongText";
import TypewriterText from "@/components/TypewriterText";
import homeImage from "@/assets/images/gabrielregis.jpg";
import Image from "next/image";
import { useHomeContent } from "@/hooks/useContent";

export default function Home() {
  const content = useHomeContent();

  return (
    <div className={styles.page} data-container>
      <main className={styles.main} data-container-home>
        <h1 className={styles.visuallyHidden}>{content.seoTitle}</h1>

        <TypewriterText
          text={content.hero.typewriter}
          speed={100}
          as="h2"
        />

        <section aria-label="Introdução">
          <LongText>
            {content.intro.text}
          </LongText>

          <figure className={styles.imageContainer}>
            <Image
              src={homeImage.src}
              alt="Gabriel Regis"
              className={styles.image}
              width={800}
              height={500}
              priority
            />
            <figcaption className={styles.imageLabel}>
              {content.intro.imageLabel}{" "}
              <a
                href="https://www.ufba.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ufbaLink}
              >
                {content.intro.ufba}
              </a>
            </figcaption>
          </figure>
        </section>

        <section aria-label="Resumo">
          <LongText>
            {content.summary.text}
          </LongText>
        </section>
      </main>
    </div>
  );
}
