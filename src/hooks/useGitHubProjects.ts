'use client'
import { useState, useEffect, useCallback } from 'react';
import { createGitHubService } from '@/services/github';
import type { ProjectWithTechnologies } from '@/services/github';

interface UseGitHubProjectsReturn {
  projects: ProjectWithTechnologies[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Hook customizado para buscar projetos do GitHub dinamicamente
 * Usa o serviço GitHub existente para buscar repositórios com suas tecnologias
 */
export function useGitHubProjects(): UseGitHubProjectsReturn {
  const [projects, setProjects] = useState<ProjectWithTechnologies[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProjects = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Configurar serviço GitHub com variáveis de ambiente
      const githubService = createGitHubService({
        username: process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Regis2077',
        token: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
        cacheTTL: 1000 * 60 * 60, // 1 hora
      });

      // Buscar repositórios com linguagens
      const fetchedProjects = await githubService.fetchRepositoriesWithLanguages({
        excludeForks: true,
        minStars: 0,
        sortBy: 'updated',
      });

      setProjects(fetchedProjects);
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error('Failed to fetch projects');
      setError(errorMessage);
      console.error('Error fetching GitHub projects:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Buscar projetos na montagem do componente
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    projects,
    isLoading,
    error,
    refetch: fetchProjects,
  };
}
