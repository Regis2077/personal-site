import PageHeader from "@/components/PageHeader"
import Link from "next/link"

const bookmarksItem = [
  {
    title: "teste Programming Across Paradigms * Anjana Vakil * GOTO 2017",
    link: "https://t.co/zwjUoxhuhG"
  },
  {
    title: "teste Programming Across Paradigms * Anjana Vakil * GOTO 2017",
    link: "https://t.co/zwjUoxhuhG"
  },
  {
    title: "teste Programming Across Paradigms * Anjana Vakil * GOTO 2017",
    link: "https://t.co/zwjUoxhuhG"
  },
  {
    title: "teste Programming Across Paradigms * Anjana Vakil * GOTO 2017",
    link: "https://t.co/zwjUoxhuhG"
  },

]


const BookMarks = () => {
  return (
    <div data-container>
      <PageHeader title="Meus BookMarks" />

      <ul>
        {
          bookmarksItem.map(({ title, link }) => (
            <li>
              <Link target="_blank" href={link}>{title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default BookMarks