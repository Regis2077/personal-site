import BlogSection from "@/components/BlogSection"
import PageHeader from "@/components/PageHeader"

const articlesPage = () => {
  return (
    <div data-container-home>
      <PageHeader title="Artigos">
        Coisas técnicas ou não que acho interessante compartilhar.
      </PageHeader>
      <BlogSection />
    </div>
  )
}
export default articlesPage