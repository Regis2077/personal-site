import Link from "next/link";
import styles from "./sectionRoll.module.scss"
import LongText from "@/components/LongText"
import { useWorkContent } from "@/hooks/useContent";

const ResumeSection = () => {

  const experiences = useWorkContent().companies;

  return (
    <div className={styles.sectionRoll} data-container-home>
      {experiences.map((item, index) => (
        <div className={styles["sectionRoll-item"]} key={index}>
          {item.experience.map((experience, experienceIndex) => (
            <div className={styles["sectionRoll-item-experience"]} key={experienceIndex}>
              <div className={styles["sectionRoll-item-experience-header"]}>
                <h3 className={styles["sectionRoll-item-experience-title"]}>{experience.title}</h3>
                <span className={styles["sectionRoll-item-experience-year"]}>{experience.time}</span>
              </div>
              <Link className={styles["sectionRoll-item-experience-company"]} href={item.companyLink || ""} target="_blank">
                {item.company}
              </Link>
              <LongText className={styles["sectionRoll-item-experience-description"]}>
                {experience.describe}
              </LongText>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
};

export default ResumeSection;