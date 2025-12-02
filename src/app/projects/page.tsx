"use client"

import Cards from "@/components/Cards";
import PageHeader from "@/components/PageHeader";
import { useProjectsContent } from "@/hooks/useContent";

const ProjectsPage = () => {
  const content = useProjectsContent();

  return (
    <div data-container>
      <PageHeader title={content.page.title}>
        {content.page.description}
      </PageHeader>
      <Cards />
    </div>
  )
}

export default ProjectsPage;