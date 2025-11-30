/**
 * GitHub API Response Types
 * Type-safe interfaces for GitHub REST API responses
 */

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  open_issues_count: number;
  topics: string[];
  visibility: string;
  default_branch: string;
}

export interface GitHubLanguages {
  [language: string]: number;
}

export interface LanguageInfo {
  name: string;
  bytes: number;
  percentage: number;
}

export interface ProjectWithTechnologies {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  deployUrl: string | null;
  githubUrl: string;
  stars: number;
  updatedAt: string;
}

export interface GitHubServiceConfig {
  username: string;
  token?: string;
  cacheTTL?: number; // Time to live in milliseconds
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
}
