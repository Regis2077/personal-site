"use client"

import About from "@/components/About"
import LongText from "@/components/LongText"
import PageHeader from "@/components/PageHeader"
import mam from "@/assets/images/mam.jpg"
import Image from "next/image"
import { useAboutContent } from "@/hooks/useContent"
import styles from "./page.module.scss"

const AboutPage = () => {
  const content = useAboutContent();

  return (
    <div data-container>
      <PageHeader title={content.page.title} />

      <article>
        <section aria-label="Introdução">
          <LongText>
            {content.content.intro}
          </LongText>
        </section>

        <figure className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={mam.src}
            alt={content.content.image.alt}
            width={800}
            height={500}
            loading="lazy"
          />
          <figcaption className={styles.imageLabel}>
            {content.content.image.label}
          </figcaption>
        </figure>

        <section aria-label="Biografia">
          <LongText>
            {content.content.bio}
          </LongText>
        </section>

        <section aria-label="Hobbies">
          <About hobbiesTitle={content.hobbies.title} hobbiesItems={content.hobbies.items} />
        </section>
      </article>
    </div>
  )
}

export default AboutPage