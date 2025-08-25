import styles from "./sectionRoll.module.scss"

const mockSectionRoll = [
  {
    company: "company name",
    experience: [
      {
        title: "work experience",
        time: "12/06/2022 a 23/12/2035",
        describe:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.`
  
      },
    ],
  },
  {
    company: "company name",
    experience: [
      {
        title: "work experience",
        time: "12/06/2022 a 23/12/2035",
        describe:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.`
  
      },
      {
        title: "work experience promote",
        time: "12/06/2022 a 23/12/2035",
        describe:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.`
  
      },
    ],
  },
  {
    company: "company name",
    experience: [
      {
        title: "work experience",
        time: "12/06/2022 a 23/12/2035",
        describe:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.`
  
      },
    ],
  },
]

const SectionRoll = () => {
  return(
    <div className={styles.sectionRoll} data-container-home>
      {mockSectionRoll.map((item, index) => (
        <div className={styles["sectionRoll-item"]} key={index}>
          <h2>{item.company}</h2>
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