"use client"

import BlogSection from "@/components/BlogSection"
import PageHeader from "@/components/PageHeader"
import { useArticlesContent } from "@/hooks/useContent"

const ArticlesPage = () => {
  const content = useArticlesContent();

  return (
    <div data-container-home>
      <PageHeader title={content.page.title}>
        {content.page.description}
      </PageHeader>
      <BlogSection />
    </div>
  )
}

export default ArticlesPage