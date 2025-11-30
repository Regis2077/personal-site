import type {
  GitHubRepository,
  GitHubLanguages,
  GitHubServiceConfig,
  CacheEntry,
  ProjectWithTechnologies,
} from './types';
import { mapToProjectFormat, filterRepositories, sortRepositories } from './utils';

/**
 * GitHub API Service
 * Handles all interactions with GitHub REST API
 */
export class GitHubService {
  private baseUrl = 'https://api.github.com';
  private config: Required<GitHubServiceConfig>;
  private cache: Map<string, CacheEntry<unknown>> = new Map();

  constructor(config: GitHubServiceConfig) {
    this.config = {
      username: config.username,
      token: config.token || '',
      cacheTTL: config.cacheTTL || 1000 * 60 * 60, // 1 hour default
    };
  }

  /**
   * Gets data from cache if available and not expired
   */
  private getFromCache<T>(key: string): T | null {
    const cached = this.cache.get(key);
    if (!cached) return null;

    const isExpired = Date.now() - cached.timestamp > this.config.cacheTTL;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    console.log(`✅ Cache hit: ${key}`);
    return cached.data as T;
  }

  /**
   * Stores data in cache
   */
  private setCache<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  /**
   * Makes a request to GitHub API with proper headers and error handling
   */
  private async request<T>(endpoint: string): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    if (this.config.token) {
      headers['Authorization'] = `Bearer ${this.config.token}`;
    }

    console.log(`🔄 Fetching: ${endpoint}`);

    try {
      const response = await fetch(url, { headers });

      // Log rate limit info
      const remaining = response.headers.get('X-RateLimit-Remaining');
      const limit = response.headers.get('X-RateLimit-Limit');
      if (remaining && limit) {
        console.log(`📊 Rate limit: ${remaining}/${limit} remaining`);
      }

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('GitHub API rate limit exceeded. Please add a GITHUB_TOKEN or wait.');
        }
        if (response.status === 404) {
          throw new Error(`Resource not found: ${endpoint}`);
        }
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Failed to fetch from GitHub API: ${String(error)}`);
    }
  }

  /**
   * Fetches all repositories for the configured user
   */
  async fetchUserRepositories(): Promise<GitHubRepository[]> {
    const cacheKey = `repos:${this.config.username}`;
    const cached = this.getFromCache<GitHubRepository[]>(cacheKey);
    if (cached) return cached;

    const repos = await this.request<GitHubRepository[]>(
      `/users/${this.config.username}/repos?per_page=100&sort=updated`
    );

    this.setCache(cacheKey, repos);
    return repos;
  }

  /**
   * Fetches languages for a specific repository
   */
  async fetchRepositoryLanguages(owner: string, repo: string): Promise<GitHubLanguages> {
    const cacheKey = `languages:${owner}/${repo}`;
    const cached = this.getFromCache<GitHubLanguages>(cacheKey);
    if (cached) return cached;

    const languages = await this.request<GitHubLanguages>(
      `/repos/${owner}/${repo}/languages`
    );

    this.setCache(cacheKey, languages);
    return languages;
  }

  /**
   * Fetches repositories with their languages
   * @param options - Filter and sort options
   */
  async fetchRepositoriesWithLanguages(options?: {
    excludeForks?: boolean;
    minStars?: number;
    limit?: number;
    sortBy?: 'stars' | 'updated' | 'created' | 'name';
  }): Promise<ProjectWithTechnologies[]> {
    const {
      excludeForks = true,
      minStars = 0,
      limit,
      sortBy = 'updated',
    } = options || {};

    // Fetch all repositories
    let repos = await this.fetchUserRepositories();

    // Filter repositories
    repos = filterRepositories(repos, { excludeForks, minStars });

    // Sort repositories
    repos = sortRepositories(repos, sortBy);

    // Limit if specified
    if (limit) {
      repos = repos.slice(0, limit);
    }

    console.log(`📦 Processing ${repos.length} repositories...`);

    // Fetch languages for each repository
    const projects: ProjectWithTechnologies[] = [];

    for (const repo of repos) {
      try {
        const languages = await this.fetchRepositoryLanguages(
          this.config.username,
          repo.name
        );

        // Only include repos that have languages
        if (Object.keys(languages).length > 0) {
          const project = mapToProjectFormat(repo, languages);
          projects.push(project);
          console.log(`✅ ${repo.name}: ${Object.keys(languages).join(', ')}`);
        }
      } catch (error) {
        console.error(`❌ Failed to fetch languages for ${repo.name}:`, error);
        // Continue with other repos even if one fails
      }
    }

    return projects;
  }

  /**
   * Clears the cache
   */
  clearCache(): void {
    this.cache.clear();
    console.log('🗑️  Cache cleared');
  }
}

/**
 * Creates a GitHub service instance
 */
export function createGitHubService(config: GitHubServiceConfig): GitHubService {
  return new GitHubService(config);
}
