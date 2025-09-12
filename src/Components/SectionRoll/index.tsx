import Link from "next/link";
import styles from "./sectionRoll.module.scss"
import experiences from "@/content/pt/works.json"

const SectionRoll = () => {
  return(
    <div className={styles.sectionRoll} data-container-home>
      {experiences.map((item, index) => (
        <div className={styles["sectionRoll-item"]} key={index}>
          <Link className={styles["sectionRoll-item-company"]} href={item.companyLink || ""} target="_blank">
            {item.company}
          </Link>
          {item.experience.map((experience, index) => (
            <div className={styles["sectionRoll-item-experience"]} key={index}>
              <h3 className={styles["sectionRoll-item-experience-title"]}>{experience.title}</h3>
              <p>{experience.time}</p>
              <p>{experience.describe}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
};

export default SectionRoll;