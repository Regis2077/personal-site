"use client"

import Cards from "@/components/Cards";
import PageHeader from "@/components/PageHeader";
import { useProjectsContent } from "@/hooks/useContent";

const ProjectsPage = () => {
  const content = useProjectsContent();

  return (
    <>
      <PageHeader title={content.page.title}>
        {content.page.description}
      </PageHeader>
      <Cards />
    </>
  )
}

export default ProjectsPage;