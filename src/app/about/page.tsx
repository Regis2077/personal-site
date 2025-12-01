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
    <div data-container-home>
      <PageHeader title={content.page.title} />
      <LongText>
        {content.content.intro}
      </LongText>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={mam.src}
          alt={content.content.image.alt}
          width={800}
          height={500}
        />
        <span className={styles.imageLabel}>{content.content.image.label}</span>
      </div>

      <LongText>
        {content.content.bio}
      </LongText>

      <About hobbiesTitle={content.hobbies.title} hobbiesItems={content.hobbies.items} />
    </div>
  )
}

export default AboutPage