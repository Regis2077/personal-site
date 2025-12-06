import type {
  GitHubRepository,
  GitHubLanguages,
  LanguageInfo,
  ProjectWithTechnologies,
} from './types';

/**
 * Converts GitHub languages object to sorted array of language info
 * @param languages - Object with language names as keys and bytes as values
 * @returns Sorted array of languages with percentage calculations
 */
export function formatLanguages(languages: GitHubLanguages): LanguageInfo[] {
  const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);

  return Object.entries(languages)
    .map(([name, bytes]) => ({
      name,
      bytes,
      percentage: (bytes / totalBytes) * 100,
    }))
    .sort((a, b) => b.bytes - a.bytes);
}
export function getTopLanguages(languages: GitHubLanguages, limit = 5): string[] {
  const formatted = formatLanguages(languages);
  return formatted.slice(0, limit).map(lang => lang.name);
}

export function mapToProjectFormat(
  repo: GitHubRepository,
  languages: GitHubLanguages
): ProjectWithTechnologies {
  const technologies = getTopLanguages(languages);

  return {
    id: repo.id,
    title: repo.name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    description: repo.description || 'No description available',
    image: `https://opengraph.githubassets.com/1/${repo.full_name}`,
    technologies,
    deployUrl: repo.homepage || null,
    githubUrl: repo.html_url,
    stars: repo.stargazers_count,
    updatedAt: repo.updated_at,
  };
}

export function filterRepositories(
  repos: GitHubRepository[],
  options: {
    excludeForks?: boolean;
    minStars?: number;
    excludeTopics?: string[];
    includeTopics?: string[];
  } = {}
): GitHubRepository[] {
  const {
    excludeForks = true,
    minStars = 0,
    excludeTopics = [],
    includeTopics = [],
  } = options;

  return repos.filter(repo => {
    if (excludeForks && repo.fork) return false;

    if (repo.stargazers_count < minStars) return false;

    if (excludeTopics.length > 0 && repo.topics.some(topic => excludeTopics.includes(topic))) {
      return false;
    }

    if (includeTopics.length > 0 && !repo.topics.some(topic => includeTopics.includes(topic))) {
      return false;
    }

    return true;
  });
}

export function sortRepositories(
  repos: GitHubRepository[],
  sortBy: 'stars' | 'updated' | 'created' | 'name' = 'updated'
): GitHubRepository[] {
  const sorted = [...repos];

  switch (sortBy) {
    case 'stars':
      return sorted.sort((a, b) => b.stargazers_count - a.stargazers_count);
    case 'updated':
      return sorted.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
    case 'created':
      return sorted.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
}
