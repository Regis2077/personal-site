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

/**
 * Extracts top N language names from languages object
 * @param languages - Object with language names as keys and bytes as values
 * @param limit - Maximum number of languages to return
 * @returns Array of language names sorted by usage
 */
export function getTopLanguages(languages: GitHubLanguages, limit = 5): string[] {
  const formatted = formatLanguages(languages);
  return formatted.slice(0, limit).map(lang => lang.name);
}

/**
 * Maps GitHub repository data to project format
 * @param repo - GitHub repository object
 * @param languages - Languages used in the repository
 * @returns Project object in the format used by the application
 */
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

/**
 * Filters repositories based on criteria
 * @param repos - Array of GitHub repositories
 * @param options - Filter options
 * @returns Filtered array of repositories
 */
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
    // Filter forks
    if (excludeForks && repo.fork) return false;

    // Filter by stars
    if (repo.stargazers_count < minStars) return false;

    // Filter by excluded topics
    if (excludeTopics.length > 0 && repo.topics.some(topic => excludeTopics.includes(topic))) {
      return false;
    }

    // Filter by included topics (if specified, repo must have at least one)
    if (includeTopics.length > 0 && !repo.topics.some(topic => includeTopics.includes(topic))) {
      return false;
    }

    return true;
  });
}

/**
 * Sorts repositories by various criteria
 * @param repos - Array of repositories
 * @param sortBy - Sort criteria
 * @returns Sorted array of repositories
 */
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
