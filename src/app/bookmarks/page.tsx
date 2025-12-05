import PageHeader from "@/components/PageHeader"
import Link from "next/link"
import bookmarksItem from "./bookmarks.json"


const BookMarks = () => {
  return (
    <div data-container>
      <PageHeader title="Lasts BookMarks" />
      <ul data-container>
        {
          bookmarksItem.map(({ nome, link, data }) => (
            <li style={{ margin: '12px 0', lineHeight: '25px' }}>
              <Link target="_blank" href={link}>{nome} - {data}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default BookMarks