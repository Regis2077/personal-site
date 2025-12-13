"use client"

import PageHeader from "@/components/PageHeader"
import ResumeSection from "@/components/ResumeSection"
import { useWorkContent } from "@/hooks/useContent"

const WorkPage = () => {
  const content = useWorkContent();

  return (
    <div data-container>
      <PageHeader title={content.page.title}>
        {content.page.description}
      </PageHeader>
      <article>
        <ResumeSection />
      </article>
    </div>
  )
}

export default WorkPage